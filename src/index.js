// 所有的步数以及介绍
const points = [
  ['60%', '47.5%', '向阳育才小学', '上海市徐汇区向阳育才小学始建于1906年，迄今已有100年的历史，是一所五年制公办全日制小学。'],
  ['69%', '36.5%', '上海欢乐谷', '上海欢乐谷位于上海西南部的松江佘山国家旅游度假区内，全园占地面积65万平方米，拥有100多项体验项目。'],
  ['66%', '21.5%', '东方绿洲', '东方绿舟，位于上海市青浦区，上海市青少年校外活动营地，上海市教育委员会直属事业单位。'],
  ['84%', '34.5%', '五龙禅寺', '五龙禅寺原名五龙庙，在上海市金山区，庙里供奉宋朝武将施锷，传说施锷亦是一名神医，善于岐黄之术，能治百病。'],
  ['84%', '52%', '碧海金沙', '碧海金沙水上乐园，位于上海市奉贤区海湾旅游区，乐园拥有国内最大的人造沙滩，面积为1.3平方千米。'],
  ['78%', '78%', '滴水湖', '滴水湖又名芦潮湖，位于杭州湾与长江河口交汇处的东海之滨，滴水湖呈圆形，是南汇新城的中心湖泊。'],
  ['70%', '62%', '上海野生动物园', '上海野生动物园，位于上海市浦东新区，是集野生动物饲养、展览、繁育保护、科普教育与休闲娱乐为一体的主题公园。'],
  ['59%', '66%', '上海迪士尼乐园', '上海迪士尼乐园，位于上海市浦东新区，是中国内地首座迪士尼主题乐园，是一座具有纯正迪士尼风格并融汇了中国风的主题乐园。'],
  ['63%', '56%', '中华艺术宫', '中华艺术宫，位于上海市浦东新区，其原身为创建于1956年的上海美术馆，它填补了上海艺术博物馆体系的空白，使上海的艺术博物馆系列形成完整的格局。'],
  ['52%', '55%', '东方明珠', '东方明珠，位于上海市浦东新区，是集都市观光、历史陈列、浦江游览、会展演出、广播电视发射等多功能于一体的上海市标志性建筑之一。'],
  ['43%', '57%', '滨江森林公园', '上海滨江森林公园，位于上海市浦东新区，地处黄浦江、长江和东海三水汇聚之地，是一座集休闲、旅游、科普、观赏、度假为一体的敞开式公园。'],
  ['17%', '55%', '东平森林公园', '东平森林公园位于中国第三大岛崇明岛的中部，距南门港12公里，总面积为5400亩，是华东地区已形成的最大的平原人工森林。'],
  ['36%', '48%', '淞沪抗战纪念馆', '上海淞沪抗战纪念馆，坐落于上海市宝山区友谊路1号临江公园，是上海党史教育基地、上海市志愿者服务基地。'],
  ['48%', '27%', '汽车博览公园', '上海汽车博览公园环上海汽车博物馆而建，位于上海国际汽车城核心贸易区南侧，一个以汽车娱乐，汽车展览，汽车文化为主题的综合性公园。'],
  ['51%', '50.5%', '鲁迅故居', '鲁迅故居位于上海市虹口区。1959年5月，鲁迅故居被上海市人民政府公布为上海市市级文物保护单位。'],
  ];

// 关闭某个元素
function close(item) {
  item.style.setProperty('display', 'none');
}

// 打开某个元素
function open(item) {
  item.style.setProperty('display', 'block');
}

// 决定当前走几步
function getMoves() {
  const steps = Math.ceil(Math.random() * 3);
  return steps;
}

// 获取当前用户所在步数
function getPoint() {
  return points[currentStep[activePlayer - 1] - 1];
}

// 重新定位某个元素
function setNewPosition(role) {
  role.style.setProperty('top', getPoint()[0]);
  if (role === avatar1) {
    role.style.setProperty('left', 'calc(' + getPoint()[1] + ' - 20px)');
  } else {
    role.style.setProperty('left', 'calc(' + getPoint()[1] + ' + 20px)');
  }
}

const avatar1 = document.querySelector('.backgroud__avatar1');
const avatar2 = document.querySelector('.backgroud__avatar2');
const description = document.querySelector('.backgroud__description');
const descriptionTitle = document.querySelector('.backgroud__description__title');
const descriptionContent = document.querySelector('.backgroud__description__content');
const descriptionCloseButton = document.querySelector('.backgroud__description__close');
const controllers = document.querySelector('.controllers');
const controllersHead = document.querySelector('.controllers__head');
const controllersStep1 = document.querySelector('.controllers__current__1');
const controllersStep2 = document.querySelector('.controllers__current__2');
const controllersButton = document.querySelector('.controllers__controller');
const controllersWin = document.querySelector('.controllers__win');
const start = document.querySelector('.start');

// 当前玩家
let activePlayer = 1;
// 当前两个玩家的步数
const currentStep = [1, 1];

function init() {
  // 把两个玩家定位到初始位置
  setNewPosition(avatar1);
  setNewPosition(avatar2);

  // 开始按钮事件
  start.addEventListener('click', function() {
    close(start);
    open(controllers);
  });

  // 步数介绍弹窗事件
  descriptionCloseButton.addEventListener('click', function() {
    // 关闭介绍弹窗
    close(description);
    // 获取当前玩家
    activePlayer = (activePlayer % 2) + 1;

    // 设置控制弹窗的文案
    controllersHead.textContent = '请' + (activePlayer === 1 ? '一' : '二') + '号玩家点击色子决定步数';
    controllersStep1.textContent = currentStep[0];
    controllersStep2.textContent = currentStep[1];

    // 打开控制弹窗
    open(controllers);
  });

  // 控制弹窗事件
  controllersButton.addEventListener('click', function() {
    // 更新当前玩家的新步数
    const newStep = getMoves() + currentStep[activePlayer - 1];
    currentStep[activePlayer - 1] = newStep;
    // 更新当前用户的新位置
    setNewPosition(activePlayer === 1 ? avatar1 : avatar2);
    // 如果某个用户超过总步数，显示成功
    if (newStep >= 15) {
      controllersHead.textContent = '恭喜' + (activePlayer === 1 ? '一' : '二') + '号玩家获得胜利';
      controllersStep1.textContent = currentStep[0];
      controllersStep2.textContent = currentStep[1];
      close(controllersButton);
      open(controllersWin);
      return;
    }
    // 关闭控制弹窗
    close(controllers);
    // 更新介绍弹窗内容
    descriptionTitle.textContent = getPoint()[2];
    descriptionContent.textContent = getPoint()[3];
    // 设置介绍弹窗位置
    description.style.setProperty('top', 'calc(' + getPoint()[0] + ' - 200px)');
    description.style.setProperty('left', 'calc(' + getPoint()[1] + ' - 125px)');
    setTimeout(() => {
      // 展示介绍弹窗
      open(description);
    }, 2000);
  });
}

init();
