// async programming
// Asynchronous programming is a way to write code that doesn’t block the program from running while
//  it waits for something to finish — like downloading data, reading a file, or making a request to a server.
// Instead of waiting (and freezing everything), the program can continue doing other things and come back to the task once it's done.

function task1(){
    setTimeout(() => {
       console.log('Task 1 performed ') 
    }, 5000);
}

function task2(){
    console.log('Task two is done and waiting for task 1')
}

task1()
task2()



//promises is kind of an object which return

const fetchdata1= (value:boolean):Promise<string> =>{
return new Promise((resolve,reject)=>{
    if(value){
        setTimeout(() => {
            resolve('Data fetched successfully')
        }, 3000);
    }else{
        reject('Error Found')
    }
})
}

fetchdata1(true)
.then((data)=>{
console.log('success',data)
})
.catch((error)=>{
console.log('Failure', error)
})


// for false 

const fetchdata= (value:boolean):Promise<string> =>{
    return new Promise((resolve,reject)=>{
        if(value){
            setTimeout(() => {
                resolve('Data fetched successfully')
            }, 6000);
        }else{
            reject('Error Found')
        }
    })
    }
    
    fetchdata(false)
    .then((data)=>{
    console.log('success',data)
    })
    .catch((error)=>{
    console.log('Failure', error)
    })





    //chaining of then  
const fetchdata2= (value:boolean):Promise<string> =>{
    return new Promise((resolve,reject)=>{
        if(value){
            setTimeout(() => {
                resolve('Data fetched successfully')
            }, 6000);
        }else{
            reject('Error Found')
        }
    })
    }
    
    fetchdata2(true)
    .then((data)=>{
    console.log('success',data)
    return 'get more data '
    })
    .then((moredata)=>{
     console.log('getting more data: ',moredata)
    })
    .catch((error)=>{
    console.log('Failure', error)
    })




    /*Aysnc and Await function 
    async makes a function return a Promise.
    await pauses execution of the async function until 
    the awaited Promise resolves or rejects.  */

    async function fetchNewData(value:boolean):Promise<string>{
        return 'data fetched'
    }
    fetchNewData(true)
    .then(data=>{
        console.log(data)
    })
    .catch(error=>{
        console.log(error)
    });

    async function getData():Promise<void>{
        try{
        const data= await fetchNewData(true)
        const data1 = await fetchNewData(false)
        }catch(error){
      console.log (error)
        }
    }



    // working with api using fetch 
    interface Post {
        userId: number;
        id: number;
        title: string;
        body: string;
      }
      
      async function fetchPosts(): Promise<Post[]> {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
          if (!response.ok) {
            
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const posts: Post[] = await response.json(); 

          console.log("Fetched posts:", posts);
      
          return posts;

        } catch (error: any) {
          console.log("Error fetching posts:", error.message);
          throw new Error(error.message); 
        }
      }
      
      fetchPosts()
        .then(data => {
          console.log("Posts received:", data);
        })
        .catch(error => {
          console.error("Caught error:", error.message);
        });
      