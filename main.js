 let ComentsBox = document.querySelector('.user__comments')
    
    async function getComments () {
       try {
            let loadingText = document.createElement('h2')
            loadingText.textContent = 'Идет загрузка,подождите несколько секунд'
            
            ComentsBox.append(loadingText)
        
            let res = await fetch('https://jsonplaceholder.typicode.com/comments')
            let database = await res.json()
            
            ComentsBox.removeChild(loadingText)
            
            
            database.forEach((user,i) => {
                let item = document.createElement('div')
                item.classList.add('user__item')
                
                let name = document.createElement('h2')
                let body = document.createElement('p')
                let email = document.createElement('a')
                
                name.textContent = `Имя: ${user.name}`
                body.textContent = `Информация: ${user.body}`
                email.textContent = user.email
                email.href = `mailto:${user.email}`
                
                item.append(name,body, email)
                
                ComentsBox.append(item)
                
            })
       } catch (error) {
            console.log(error);
       }
        
    }
    getComments()
    
    