const base = {
    get() {
        return {
            url : "http://localhost:8080/susheguanli/",
            name: "susheguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/susheguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "宿舍管理系统小程序"
        } 
    }
}
export default base
