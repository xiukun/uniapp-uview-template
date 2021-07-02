const api = {
    fedLogOut: '',
};
const demoApi = (vm) => {
    // 请求方法定义区域
    const fedLogOut = () => {
        // 前端登出
        vm.$u.get(api.fedLogOut);
        vm.$u.vuex('vuex_token', '');
        vm.$u.vuex('vuex_user', { nickName: '游客' });
    };
    return { fedLogOut };
};
export default demoApi;
