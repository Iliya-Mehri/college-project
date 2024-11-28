
function Enqueue(object) {
    if( isFull() )
    {
        alert("Queue is full")
    }
    else{
        Queue[Queue.length] = object
    }
}

function Dequeue() {
    if ( isEmpty() ) {
        alert("Queue is empty")
    }
    else{
        for(let i = 0 ; i<Queue.length; i++)
        {
            Queue[i]=Queue[i+1]
        }
        Queue.length=Queue.length-1
    }
}

function Peek() {
    console.log(Queue);
}

function ReverseQueue() {
    let ReverseQueue = []
    for (let i = Queue.length; i > 0; i--) {
        ReverseQueue[Queue.length-i]=Queue[i-1]
    }
    Queue=ReverseQueue
}

function isEmpty() {
    if (Queue.length == 0) {
        return true
    }
    else{
        return false
    }
}

function isFull() {
    if (Queue.length == 0) {
        return true
    }else
    {
        return false
    }
}
