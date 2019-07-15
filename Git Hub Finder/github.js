class GitHub {
    constructor(){
        this.client_id = 'f63fc573319520637809';
        this.client_secret = '504e411d2bb10be4b3b4a0439252475adb7945d5';
    }

    aync getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            // same as profile:profile
            profile
        }
    }

    
}