const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootsl52i/",
            name: "springbootsl52i",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootsl52i/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "移动网赚项目小程"
        } 
    }
}
export default base
