// Publisher (Subject)
class YoutubeChannel {
    constructor() {
        this.subscribers = [];
    }

    subscribe(user) {
        this.subscribers.push(user);
        user.update(`${user.name}, you have subscribed to the channel.`);
    }

    unsubscribe(user) {
        this.subscribers = this.subscribers.filter(sub => sub !== user);
        user.update(`${user.name}, you have unsubscribed from the channel.`);
    }

    notify(message) {
        this.subscribers.forEach(sub => sub.update(message));
    }
}

// Observer (User)
class User {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name}: ${data}`);
    }
}


// ------------------------------
// Usage
// ------------------------------

let channel = new YoutubeChannel();

let user1 = new User("Parmar Sir");
let user2 = new User("Gagan");

// Users subscribe
channel.subscribe(user1);
channel.subscribe(user2);

// Notify all subscribers
channel.notify("New video uploaded on JavaScript Observer Pattern!");

// Unsubscribe one user
channel.unsubscribe(user2);

// Send another notification
channel.notify("Next video coming tomorrow!");
