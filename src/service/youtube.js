class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }
  // constructor(key) {
  //   this.youtube = axios.create({
  //     baseURL: "https://youtube.googleapis.com/youtube/v3",
  //     params: { key },
  //   });
  // }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      // video api 사용
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResult: "25",
      },
    });
    return response.data.items; // json으로 자동 변환, 그 중 items 항목 리턴
    // https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      // search api 사용
      params: {
        part: "snippet",
        maxResult: "25",
        q: query,
        type: "video",
      },
    });
    return response.data.items; // json으로 자동 변환, 그 중 items 항목 리턴
    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}
  }
}
export default Youtube;
