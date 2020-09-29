import React from 'react';
import News from './components/News'

import firebase from './firebase';
import matchTitle from './utils/titleMathcing'

const db = firebase.firestore()

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};   

    this.jsonForms = {}
    this.news = {}
  }    

  //Костыль чтобы не делать мульон запросов!
  loadJsonForms = () => {

    const formUrls = [
      'https://raw.githubusercontent.com/KloopMedia/ElectionsMonitoringFormsConfig/master/final_form_afternoon.json',
      'https://raw.githubusercontent.com/KloopMedia/ElectionsMonitoringFormsConfig/master/final_form_emergency.json',
      'https://raw.githubusercontent.com/KloopMedia/ElectionsMonitoringFormsConfig/master/final_form_enter.json',
      'https://raw.githubusercontent.com/KloopMedia/ElectionsMonitoringFormsConfig/master/final_form_evening.json',
      'https://raw.githubusercontent.com/KloopMedia/ElectionsMonitoringFormsConfig/master/final_form_exit.json',
      'https://raw.githubusercontent.com/KloopMedia/ElectionsMonitoringFormsConfig/master/final_form_home.json',
      'https://raw.githubusercontent.com/KloopMedia/ElectionsMonitoringFormsConfig/master/final_form_mobile.json',
      'https://raw.githubusercontent.com/KloopMedia/ElectionsMonitoringFormsConfig/master/final_form_morning.json'
    ]

    formUrls.forEach((url) => {
      fetch(url)
      .then(response => response.json())
      .then((formData) => {
        this.jsonForms[url] = formData             
      })
      .catch((error) => {
        console.error(error)
      })          
    })

    console.log(this.jsonForms)
  }

  generateNewsData = (feedData, formData) => {    

    let report = {}
    let violations = []
    let description = []
    let fileInfo = {}

    //Если файл
    if(feedData.hasOwnProperty('fileId')){

      //console.log(feedData)
      //TODO
      report['title'] = 'Нарушения на участке: ?'
      report['date'] = new Date(feedData['date'].seconds*1000).toString();

      fileInfo['public_url'] = feedData['public_url']
      fileInfo['filename'] = feedData['filename']

      const imgExt = ['jpg', 'jpeg', 'png']
      if (imgExt.includes(feedData['filename'].split(".")[-1]))
      {
        fileInfo['isImage'] = true        
      } else {
        fileInfo['isImage'] = false
      }

      report['violations'] = violations     
      report['description'] = description  
      report['fileInfo'] = fileInfo

      this.news[feedData['fileId']] = report   

    //Если форма
    } else {

      //TODO
      report['title'] = 'Нарушения на участке: ?'
      report['date'] = new Date(feedData['timestamp'].seconds*1000).toString();

      Object.entries(feedData['answers']).forEach(([keyAnswer, answer]) => {

        console.log(answer)
        if (answer === null || answer === undefined ){
          console.log('ERROR')
          return
        }
        //console.log(`${keyAnswer} ${answer}`)
        let violation = []

        if (formData['questions'][keyAnswer]['type'] == 'multiradio'){
          let title = formData['questions'][keyAnswer]['title']              
          //console.log(title)  
          
          violation.push(title.slice(3))  
          description.push(matchTitle(title))               

          const subquestions = formData['questions'][keyAnswer]['subquestion'] 
          //console.log(subquestions)

          const answers = formData['questions'][keyAnswer]['answer'] 
          Object.entries(answer).forEach(([keyQ, answerQ]) => {
            //console.log(subquestions[key]['q'])
            //console.log(answers[answer])

            
            let generatedAnswer = subquestions[keyQ]['q'] + ' ответ: ' + answers[answerQ]
            violation.push(generatedAnswer)
            
            //Выводить только если отличается от вопроса по умолчанию?
            // if(answerQ.toString() != subquestions[keyQ]['no'])
            // {
            //   let generatedAnswer = subquestions[keyQ]['q'] + ' ответ: ' + answers[answerQ]
            //   violation.push(generatedAnswer)
            // }
            
          });

          violations.push(violation)

        } else if (formData['questions'][keyAnswer]['type'] == 'input' || formData['questions'][keyAnswer]['type'] == 'time'){
          
          let title = formData['questions'][keyAnswer]['title']              
          //console.log(title)  
          
          violation.push(title.slice(3))  
          description.push(matchTitle(title))    

          violation.push(answer)

          violations.push(violation)

        } else if (formData['questions'][keyAnswer]['type'] == 'radio'){
          
          let title = formData['questions'][keyAnswer]['title']              
          //console.log(title)  
          
          violation.push(title.slice(3))  
          description.push(matchTitle(title))    

          const answers = formData['questions'][keyAnswer]['answer']
          violation.push(answers[answer])

          violations.push(violation)          
        }       
        
      });

      description.push('(разверните пост для детального просмотра)')

      report['violations'] = violations     
      report['description'] = description  
      report['fileInfo'] = fileInfo

      this.news[feedData['responseId']] = report
      
    }    
  }

  componentDidMount() {   
    
    this.loadJsonForms()

    //Получаем все формы с ответами
    db.collection("feed").get()
    .then(response => {
      response.forEach(doc => {

        console.log(doc.id, '=>', doc.data())

        const feedData = doc.data()    

        //Выводим файлы или "формы наблюдателей" 
        if(feedData.hasOwnProperty('form_url')){

          //костыль чтобы не обрабатывать старые формы
          if (this.jsonForms.hasOwnProperty(feedData['form_url']) == false){
            console.log("OLD FROM!!!")
            console.log(feedData['form_url'])
            return
          }

          let formData = this.jsonForms[feedData['form_url']]
          this.generateNewsData(feedData, formData)         
        }
      });    
      
      //STATE 
      if (this.state.news !== this.news){                 
            
        this.setState({
          news: this.news
        });
      }    
    })   
  }  
  
  render () {

    let isAllowedRender = true
    if(this.state.news === undefined) {
      isAllowedRender = false
    }   

    return (
   <div>     
     {isAllowedRender
        ? <News news={this.state.news}></News>
        : <div></div>
      }
   </div>
    );
  }
}

export default App;