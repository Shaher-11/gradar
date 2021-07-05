class Github {
  constructor() {
    this.client_id = ' 418290a6d27f79aa5aa2';
    this.client_secret = ' 501cb10bd6900d02b494676116f346acde26f388';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    return {
      profile
    }
  }
}