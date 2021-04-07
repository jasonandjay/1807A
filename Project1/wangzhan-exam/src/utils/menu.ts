
import { UserOutlined, LaptopOutlined, NotificationOutlined, BellOutlined, CommentOutlined } from '@ant-design/icons';

export default [{
  name: 'question',
  meta: {
      icon: UserOutlined,
      title: '',
      show: true
  },
  children: [{
      path: '/main/addQuestion',
      name: 'addQuestion',
      meta: {
          title: '添加试题',
          show: true,
          view_id: 'main-addQuestions'
      },
  },{
      path: '/main/classifyQuestion',
      name: 'classifyQuestion',
      meta: {
          title: '试题分类',
          show: true,
          view_id: 'main-questionsType'
      },
  },{
      path: '/main/questionDetail',
      name: 'questionDetail',
      meta: {
          title: '试题详情',
          show: false,
          view_id: 'main-questionsDetail'
      },
  },{
      path: '/main/viewQuestion',
      name: 'viewQuestion',
      meta: {
          title: '查看试题',
          show: true,
          view_id: 'main-watchQuestions'
      },
  }]
}
,{
  name: 'user',
  meta: {
      icon: LaptopOutlined,
      title: '用户管理',
      show: true
  },
  children: [{
      path: '/main/addConsumer',
      name: 'addUser',
      meta: {
          title: '添加用户',
          show: true,
          view_id: "main-addUser"
      },
  },{
      path: '/main/showConsumer',
      name: 'listUser',
      meta: {
          title: '用户展示',
          show: true,
          view_id: "main-showUser"
      },
  }]
},{
  name: 'paper',
  meta: {
      icon: NotificationOutlined,
      title: '',
      show: true
  },
  children: [{
      path: '/main/addPaper',
      name: 'addPaper',
      meta: {
          title: '添加考试',
          show: true,
          view_id: "main-addExam"
      },
  },{
      path: '/main/paperDetail',
      name: 'paperDetail',
      meta: {
          title: '考试详情',
          show: false,
          view_id: "main-examDetail"
      },
  },{
      path: '/main/paperList',
      name: 'paperList',
      meta: {
          title: '试卷列表',
          show: true,
          view_id: "main-examList"
      },
  }]
},{
  name: 'class',
  meta: {
      icon: BellOutlined,
      title: '班级管理',
      show: true
  },
  children: [{
      path: '/main/classManage',
      name: 'classManage',
      meta: {
          title: '班级管理',
          show: true,
          view_id: "main-grade"
      },
  },{
      path: '/main/roomManage',
      name: 'roomManage',
      meta: {
          title: '教室管理',
          show: true,
          view_id: "main-room"
      },
  },{
      path: '/main/studentManage',
      name: 'studentManage',
      meta: {
          title: '学生管理',
          show: true,
          view_id: "main-student"
      },
  }]
},{
  name: 'marking',
  meta: {
      icon: CommentOutlined,
      title: '阅卷管理',
      show: true
  },
  children: [{
      path: '/main/markingDetail',
      name: 'markingDetail',
      meta: {
          title: '批卷',
          show: false,
          view_id: "main-examinationPapers"
      },
  },{
      path: '/main/markingList',
      name: 'markingList',
      meta: {
          title: '待批班级',
          show: true,
          view_id: "main-examPaperClassList"
      },
  },{
      path: '/main/markingStudentList',
      name: 'markingStudentList',
      meta: {
          title: '学生试卷列表',
          show: false,
          view_id: "main-examPaperClassmate"
      },
  }]
}];