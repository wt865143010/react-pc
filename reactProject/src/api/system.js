export default {

    searchEva:'/NSChina/selectSysOrderEvaluation',
    searchMsg1:'/NSChina/selectSysUserComments',
    searchPay:'/NSChina/selectSysPaymentMethod',
    searchNews:'/NSChina/selectSysMessageTemplate',


    addPay:'/NSChina/insertSysPaymentMethod',
    eidtPay:'/NSChina/updateSysPaymentMethod',
    addNews:'/NSChina/insertSysMessageTemplate',
    eidtNews:'/NSChina/updateSysMessageTemplate',

    changeStatus:'/NSChina/updateSysMessageTemplate',
    changePayStatus:'/NSChina/updateSysPaymentMethod',



    //////////////////////////////////////////账号列表////////////////////////////////
    getRole:'NSChina/sysAccNumber/getAccNumberRole',

    getAllRole:'NSChina/sysAccNumber/roleTree',
    //修改账户状态
    disableUser:'/system/disableUser',
    //条件查询
    searchMsg:'NSChina/sysAccNumber/selectAccNumber',
    //新增账号列表
    saveSure:'/system/saveSure',
    //保存账号信息
    saveEdit:'/system/saveEdit',
/////////////////////////////////////////////////大区管理////////////////////////////////
    //渲染大区列表

    //条件搜索大区信息
    searchArea:'/system/searchArea',
    //删除大区数据
    deleteArea:'/system/deleteArea',
    //修改保存
    editAreaMsg:'/system/editAreaMsg',
    //保存新增数据
    newAreaMsg:'/system/newAreaMsg',
//////////////////////////////////////////////角色列表//////////////////////////////////////
    //角色列表查询
    roleSearch:'/system/roleSearch',
    //保存修改数据
    roleXiuGai:'/system/roleXiuGai',
    //新增角色数据
    roleNewAdd:'/system/roleNewAdd',
    //点击修改状态
    disableUser1:'/system/disableUser',
    ////////////////////////////////////////操作日志//////////////////////////////////////////////
    ///查询/数据渲染
    getOpera:'/system/getOpera',


};