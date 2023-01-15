<template>
  <header>
    智能监控平台
    <span id=localtime style=" font-size:16px; position: absolute; right: 30px; top:0px; "></span>
  </header>
  <!--    <div class="mainbox">-->
  <!--      <div class="map">-->
  <!--        <div class="map1"><img src="../images/lbx.png"></div>-->
  <!--        <div class="map2"><img src="../images/jt.png"></div>-->
  <!--        <div class="map3"><img src="../images/map.png"></div>-->
  <!--        <div class="map4" id="map_1">-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <div id="content">
    <!--    主页左侧大屏   包含移动机器人平台   可穿戴生命体征检测平台-->
    <div class="content_left">
      <div class="online">
        <div class="title"><img src="../images/icon01.png"/>移动机器人平台</div>
        <div class="online_con" id="container2" style="margin-top: 30px">
          <div class="boxall">
            <div class="tit01">在线机器人状态</div>
            <div class="boxnav nav01" style="display: flex; align-items: center;">
              <div class="yqlist">
                <ul class="clearfix">
                  <li>
                    <div class="yq">{{ robot_status }}<span style="margin-top: 10px">运动状态</span></div>
                  </li>
                  <li>
                    <div class="yq">{{robot_speed}}<span style="margin-top: 10px">运动速度</span></div>
                  </li>
                  <li>
                    <div class="yq">{{robot_power}}<span style="margin-top: 10px">当前电量</span></div>
                  </li>
                  <li>
                    <div class="yq">{{ robot_warning }}<span style="margin-top: 10px">报警信息</span></div>
                  </li>
                  <li>
                    <div class="yq">{{ robot_renwu }}<span style="margin-top: 10px">作业任务</span></div>
                  </li>
                </ul>
              </div>

            </div>
            <div class="boxfoot"></div>
          </div>
        </div>
      </div>

      <div class="online" style="margin-top: 50px">
        <div class="title"><img src="../images/icon01.png"/>可穿戴生命体征检测平台</div>
        <div class="online_con2" id="container2" style="margin-top: 30px">
          <div class="boxall2">
            <div class="tit01">可穿戴生命体征检测平台状态</div>
            <div class="boxnav nav01" style="display: flex; align-items: center;">
              <div class="yqlist">
                <ul class="clearfix">
                  <li>
                    <div class="yq">{{kaf_shousuo}}<span style="margin-top: 10px">收缩压(高压)</span></div>
                  </li>
                  <li>
                    <div class="yq">{{kaf_shuzhang}}<span style="margin-top: 10px">舒张压(低压)</span></div>
                  </li>
                  <li>
                    <div class="yq">{{kaf_xinlv}}<span style="margin-top: 10px">心律状态</span></div>
                  </li>
                  <li>
                    <div class="yq">{{kaf_xueguan}}<span style="margin-top: 10px">血管弹性数值</span></div>
                  </li>
                  <li>
                    <div class="yq">{{kaf_xueguan_status}}<span style="margin-top: 10px">血管弹性状态</span></div>
                  </li>
                </ul>
              </div>

            </div>
            <div class="boxfoot">
            </div>
          </div>
        </div>
        <!--        <img id="u37_img" class="u37_img" src="../images/u37.png"-->
        <!--             style="width: 300px;height: 200px;margin-left: 20px;margin-top: 120px">-->
      </div>
      <!--      <div class="online2" style="margin-top: 20px">-->
      <!--        <div class="title"><img src="../images/icon01.png"/> 可穿戴生命体征检测平台</div>-->
      <!--        <div class="online_con" id="container2">-->
      <!--          <img id="u37_img" class="u37_img" src="../images/u37.png"-->
      <!--               style="width: 300px;height: 200px;margin-left: 20px;margin-top: 120px">-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
    <!--    主页左侧大屏   四路视频信号   环境监测平台-->
    <div class="content_center">
      <div class="center_top">
        <div class="shu">
          <div class="heng1">
            <div class="one">
              <video_main1 style="width: 450px;height: 230px;"/>
            </div>
            <div class="two">
              <video_main2 style="width: 450px;height: 230px;"/>
            </div>
          </div>
          <div class="heng2">
            <div class="one">
              <video_main3 style="width: 450px;height: 230px;"/>
            </div>
            <div class="two">
              <video_main4 style="width: 450px;height: 230px;"/>
            </div>
          </div>
        </div>
      </div>
      <div class="center_bot">
          <div class="right">
            <div class="r-one">
              <div class="row" style="margin-top: 10px">
                <div class="cell">
                  <text style="font-weight: 700;font-style: normal;font-size: 22px;color: #01CBD2;">粒子</text>
                </div>
                <div class="cell">
                  <text style="font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">粒子数(百万/m³)</text>
                </div>
              </div>
              <div class="row" style="margin-top: 20px">
                <div class="cell">
                  <text style="font-size: 22px;font-weight: 700;font-style: normal;font-size: 16px;color: #01CBD2;">
                    0.5um以上粒子
                  </text>
                </div>
                <div class="cell">
                  <text style="font-size: 22px;font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">{{lz_one}}</text>
                </div>
              </div>
              <div class="row" style="margin-top: 20px">
                <div class="cell">
                  <text style="font-size: 22px;font-weight: 700;font-style: normal;font-size: 16px;color: #01CBD2;">
                    1um以上粒子
                  </text>
                </div>
                <div class="cell">
                  <text style="font-size: 22px;font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">{{lz_two}}</text>
                </div>
              </div>
              <div class="row" style="margin-top: 20px">
                <div class="cell">
                  <text style="font-size: 22px;font-weight: 700;font-style: normal;font-size: 16px;color: #01CBD2;">
                    5um以上粒子
                  </text>
                </div>
                <div class="cell">
                  <text style="font-size: 22px;font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">{{lz_thr}}</text>
                </div>
              </div>
            </div>
            <div class="r-two" style="margin-left: 30px">
              <div class="row" style="margin-top: 10px;">
                <div class="cell">
                  <text style="font-weight: 700;font-style: normal;font-size: 22px;color: #01CBD2;">荧光粒子</text>
                </div>
                <div class="cell">
                  <text style="font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">粒子数(百万/m³)</text>
                </div>
              </div>
              <div class="row" style="margin-top: 20px">
                <div class="cell">
                  <text style="font-size: 22px;font-weight: 700;font-style: normal;font-size: 16px;color: #01CBD2;">
                    0.5um以上粒子
                  </text>
                </div>
                <div class="cell">
                  <text style="font-size: 22px;font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">{{yglz_one}}</text>
                </div>
              </div>
              <div class="row" style="margin-top: 20px">
                <div class="cell">
                  <text style="font-size: 22px;font-weight: 700;font-style: normal;font-size: 16px;color: #01CBD2;">
                    1um以上粒子
                  </text>
                </div>
                <div class="cell">
                  <text style="font-size: 22px;font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">{{yglz_two}}</text>
                </div>
              </div>
              <div class="row" style="margin-top: 20px">
                <div class="cell">
                  <text style="font-size: 22px;font-weight: 700;font-style: normal;font-size: 16px;color: #01CBD2;">
                    5um以上粒子
                  </text>
                </div>
                <div class="cell">
                  <text style="font-size: 22px;font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">{{yglz_thr}}</text>
                </div>
              </div>
            </div>
            <div class="r-th" style="margin-left: 0px;margin-left: 30px">
              <div class="row" style="margin-top: -20px">
                <div class="cell">
                  <text style="font-weight: 700;font-style: normal;font-size: 22px;color: #01CBD2;">生物粒子</text>
                </div>
                <div class="cell">
                  <text style="font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">粒子数(百万/m³)</text>
                </div>
              </div>
              <div class="row" style="margin-top: 20px">
                <div class="cell">
                  <text style="font-size: 22px;font-weight: 700;font-style: normal;font-size: 16px;color: #01CBD2;">
                    大粒径生物粒子
                  </text>
                </div>
                <div class="cell">
                  <text style="font-size: 22px;font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">{{swlz_one}}</text>
                </div>
              </div>
              <div class="row" style="margin-top: 20px">
                <div class="cell">
                  <text style="font-size: 22px;font-weight: 700;font-style: normal;font-size: 16px;color: #01CBD2;">
                    生物粒子
                  </text>
                </div>
                <div class="cell">
                  <text style="font-size: 22px;font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">{{swlz_two}}</text>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <!--    主页右侧大屏   无人机平台   态势监测平台-->
    <div class="content_right">
      <div class="online">
        <div class="title"><img src="../images/icon01.png"/>无人机平台</div>
        <div class="online_con" id="container2" style="margin-top: 30px">
          <div class="boxall">
            <div class="tit01">在线无人机状态</div>
            <div class="boxnav nav01" style="display: flex; align-items: center;">
              <div class="yqlist">
                <ul class="clearfix">
                  <li>
                    <div class="yq">{{wrj_height}}m<span style="margin-top: 10px">高度</span></div>
                  </li>
                  <li>
                    <div class="yq">{{wrj_speed}}<span style="margin-top: 10px">速度</span></div>
                  </li>
                  <li>
                    <div class="yq">{{wrj_power}}%<span style="margin-top: 10px">电量</span></div>
                  </li>
                  <li>
                    <div class="yq">{{wrj_warning}}<span style="margin-top: 10px">报警信息</span></div>
                  </li>
                  <li>
                    <div class="yq">{{wrj_status}}<span style="margin-top: 10px">运行状态</span></div>
                  </li>
                </ul>
              </div>

            </div>
            <div class="boxfoot"></div>
          </div>
        </div>
      </div>
      <div class="online" style="margin-top: 50px">
        <div class="title"><img src="../images/icon01.png"/> 态势监测平台</div>
        <div class="online_con" id="container2">
          <img id="u37_img" class="u37_img" src="../images/u47.png"
               style="width: 300px;height: 190px;margin-left: 16px;margin-top: 50px">
        </div>
      </div>
    </div>
  </div>
  <div class="bottoms">
    <button>智能监控平台</button>
    <button @click="mechClick">移动机器人</button>
    <button @click="uavClick">无人机平台</button>
    <button @click="bodyClick">可穿戴</button>
    <button @click="envClick">环境监测平台</button>
    <button @click="settingClick" style="margin-right: 80px">设置</button>
    <!--    <img @click="sure" src="../setting-imgs/Sure.png" style="width: 200px;height: 80px;margin-left: 20px;"/>-->
  </div>

</template>

<script setup>
import $ from 'jquery'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import {ref, reactive, onMounted} from "vue";
import  mainJson from '../../assets/mJson.json'

import 'video.js/dist/video-js.css'
import {videoPlayer} from 'vue-video-player'
import 'videojs-flash'
import router from "@/router";
import {
  useRouter
} from "vue-router";


import video_main1 from '../../components/video_main1'
import video_main2 from '../../components/video_main2'
import video_main3 from '../../components/video_main3'
import video_main4 from '../../components/video_main4'
import kafukaconfig from "@/assets/kafuka.json";

const video = ref('视频名称');
const $router = useRouter();

//机器人
const robot_status = ref('运动')//运动状态
const robot_speed = ref('2000')//运动速度
const robot_power = ref(98)//当前电量
const robot_renwu = ref('取水')// 当前任务
const robot_warning = ref('无')// 报警信息

//无人机
const wrj_height = ref('275m')//高度
const wrj_speed = ref('300km/h')//速度
const wrj_power = ref(77)//电量
const wrj_status = ref('正常')// 状态
const wrj_warning = ref('无')// 报警信息

//可穿戴 需要从kafka数据中拿到值
const kaf_shousuo = ref('') // 收缩压
const kaf_shuzhang = ref('')//舒张压
const kaf_xinlv = ref('') //心率状态
const kaf_xueguan = ref('') //血管弹性数值
const kaf_xueguan_status = ref('') //血管弹性状态




//粒子
const lz_one = ref(0)//0.5um以上粒子
const lz_two = ref(0)//1um以上粒子
const lz_thr = ref(0)//5um以上粒子

//荧光粒子
const yglz_one = ref(0)//0.5um以上粒子
const yglz_two = ref(0)//1um以上粒子
const yglz_thr = ref(0)//5um以上粒子

//生物粒子
const swlz_one = ref(0)//大粒径生物粒子
const swlz_two = ref(0)//生物粒子



onMounted(() => {
  setDada(mainJson)
})


//给本页面的UI控件赋值方法
const setDada = (Json) => {
  console.log(Json)
  //1 机器人相关Json
  let robot = Json.robotplatinfo
  //运动状态 左轮右轮 速度不同且不为2500 则为运动
  let left_speed = robot.leftwheel.leftwheelspeed
  let right_speed = robot.rightwheel.rightwheelspeed
  if (left_speed === right_speed && right_speed === 2500 ){
    robot_status.value = '静止'
  }else {
    robot_status.value = '运动'
  }

  //转速 平均值
  robot_speed.value = (left_speed + right_speed ) / 2

  //电量
  robot_power.value = robot.lvdai.lvdaipower

  //当前任务
  robot_renwu.value = Json.connstatus.workway

  //警告
  //robot_warning.value =

  // robot_status.value =
  //2 无人机相关Json
  let wrj = Json.wurenji.wrjinfo

  wrj_height.value = wrj.height //高度
  wrj_speed.value = wrj.speed //速度
  wrj_power.value = wrj.power //电量
  wrj_status.value = wrj.status //状态
  wrj_warning.value = wrj.warning //报警信息

  //3 可穿戴相关Json
  let kafka = JSON.parse(Json.kafka);

  kaf_shousuo.value = kafka.diastolicPressure // 收缩压
  console.log(kafka.diastolicPressure)
  kaf_shuzhang.value = kafka.systolicPressure //舒张压
  kaf_xinlv.value = kafka.heartRate // 心率状态
  kaf_xueguan.value = kafka.aorticElasticity // 血管弹性数值
  kaf_xueguan_status.value = getElasticityStatus(kafka.arteriolarElasticityStatus) // 血管弹性状态

  //4 粒子数相关Json
  let lizi = Json.wurenji.wrnjc
  console.log(lizi)
  lz_one.value = lizi.lizi05
  lz_two.value = lizi.lizi10
  lz_thr.value = lizi.lizi50

  yglz_one.value = lizi.yglizi05
  yglz_two.value = lizi.yglizi10
  yglz_thr.value = lizi.yglizi50

  swlz_one.value = lizi.biglizi
  swlz_two.value = lizi.lizi

}


const getElasticityStatus = (status) => {
  let str = '';
  switch (status) {
    case 0:
      str = '差';
      break;
    case 1:
      str = '较差';
      break;
    case 2:
      str = '一般';
      break;
    case 3:
      str = '良好';
      break;
    case 4:
      str = '非常好';
      break;
    default:
      str = '一般';
  }
  return str;
}

//跳转移动机器人
const mechClick = () => {
  console.log('新开页签 ————— 移动机器人');
  let routeData = $router.resolve({path: '/mechanical'});
  window.open(routeData.href, '_blank');
}

//跳转到无人机平台
const uavClick = () => {
  console.log('新开页签 ————— 无人机平台');
  let routeData = $router.resolve({path: '/uav'});
  window.open(routeData.href, '_blank');
}

//跳转到可穿戴
const bodyClick = () => {
  console.log('新开页签 ————— 可穿戴');
  let routeData = $router.resolve({path: '/body'});
  window.open(routeData.href, '_blank');
}

//环境监测平台
const envClick = () => {
  console.log('新开页签 ————— 监测平台');
  let routeData = $router.resolve({path: '/env'});
  window.open(routeData.href, '_blank');
}

//跳转到设置界面
const settingClick = () => {
  console.log('新开页签 ————— 设置界面');
  let routeData = $router.resolve({path: '/setting'});
  window.open(routeData.href, '_blank');
}


$(document).ready(function () {
  const whei = $(window).width();
  $("html").css({fontSize: whei / 40})
  $(window).resize(function () {
    const whei = $(window).width()
    $("html").css({fontSize: whei / 40})
  });
});

</script>

<style lang="scss">


body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

html {
  font-family: "微软雅黑";
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

body {
  //background-color: #0b122e;
  background: #000d4a url(../images/bg.jpg) center top;
  color: #fff;
  position: relative;
  font-family: "微软雅黑";
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

table {
  border-collapse: collapse;
}

img {
  vertical-align: middle;
}

ul {
  margin: 0;
  padding: 0;
}

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
  overflow: hidden;
}

.clearfix {
  *zoom: 1;
}

header {
  width: 100%;
  height: 88px;
  background: url(../images/bg_top.png) center no-repeat;
  text-align: center;
  font-weight: bold;
  font-size: 38px;
  color: #00f6ff;
  line-height: 90px;
  margin: 0 auto;
}

#content {
  width: 100%;
  height: 100%;
  margin: 20px auto 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#content .content_left {
  width: 385px;
  height: 100%;
  float: left;
}

.content_left .dtuplc {
  width: 355px;
  height: 180px;
  padding: 15px 15px 0 15px;
  background: url(../images/zuoyi.png) top no-repeat;
}

.dtu {
  width: 177px;
  height: 180px;
  float: left;
}

.plc {
  width: 177px;
  height: 180px;
  float: left;
}

.content_left .online {
  //width: 600px;
  height: 370px;
  float: left;
  background: url(../images/k_4.png) no-repeat;
  background-size: auto 100%;
  margin-left: 0px;
}


.content_right .online {
  //width: 600px;
  height: 370px;
  float: left;
  background: url(../images/k_4.png) no-repeat;
  background-size: auto 100%;
  margin-left: 0px;
}

.content_left .title {
  width: 340px;
  height: 70px;
  float: left;
  color: #00f6ff;
  font-size: 20px;
  line-height: 70px;
  background: url(../images/bottom_line.png) bottom no-repeat;
  text-align: center;
  margin-left: 10px;
}

.content_left .title img {
  vertical-align: middle;
}

.online .online_con {
  width: 365px;
  height: 240px;
  padding: 10px;
  float: left;
}

.online .online_con2 {
  width: 365px;
  height: 240px;
  padding: 10px;
  float: left;
  //background: #36791a;
  background: url(../images/u37.png) no-repeat;
  background-size: auto 80%;
  margin-top: 30px;
}


.content_left .industry {
  width: 385px;
  height: 425px;
  float: left;
  background: url(../images/hangye.png) no-repeat;
  margin-top: 20px;
}

.industry .industry_con {
  width: 365px;
  height: 335px;
  padding: 10px;
  float: left;
}

#content .content_center {
  width: 1050px;
  height: 100%;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content_center .center_top {
  width: 1050px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(../images/center01.png) center no-repeat;
  background-size: auto 100%;

}

.content_center .title {
  width: 340px;
  height: 70px;
  float: left;
  color: #00f6ff;
  font-size: 20px;
  line-height: 70px;
  background: url(../images/bottom_line.png) bottom no-repeat;
  text-align: center;
}


.content_center {
  height: 550px;
  width: 1050px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .shu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 30px;

    .heng1 {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 45%;
      align-items: center;
      justify-content: center;
    }

    .heng2 {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 45%;
      align-items: center;
      justify-content: center;
      padding-top: 10px;
    }
  }
}

.panel-table {
  text-align: left;
  color: #ccc;
  margin: 0 auto !important;
  width: 96%;
  margin-top: 20px !important;
  padding: 0.5rem 0 !important;
  font-size: 1.2rem;
}

.content_center .center_bot {
  width: 1050px;
  height: 250px;
  background: url(../images/center02.png) no-repeat;
  margin-top: 10px;
}

tr.aaa:hover {
  background: #1d3152;
  cursor: pointer;
}

.b1 {
  width: 70px;
  height: 25px;
  background: #FF0000;
  cursor: pointer;
  color: #FFFFFF;
  border: none;
  border-radius: 3px;
}

.b2 {
  width: 70px;
  height: 25px;
  background: #2897c4;
  cursor: pointer;
  color: #FFFFFF;
  border: none;
  border-radius: 3px;
}

.b3 {
  width: 70px;
  height: 25px;
  background: #36791a;
  cursor: pointer;
  color: #FFFFFF;
  border: none;
  border-radius: 3px;
}

#content .content_right {
  width: 385px;
  height: 100%;
}

.content_right .report {
  width: 325px;
  height: 145px;
  line-height: 20px;
  background: url(../images/zuoyi.png) top no-repeat;
  padding: 35px 30px 0 30px;
}

.report1 {
  width: 134px;
  height: 110px;
  background: url(../images/report01.png) center no-repeat;
  text-align: center;
  padding-top: 24px;
}

.report2 {
  width: 134px;
  height: 110px;
  background: url(../images/report02.png) center no-repeat;
  text-align: center;
  padding-top: 24px;
}

.report p {
  font-weight: bold;
  font-size: 18px;
  color: #ff0000;
}

.report small {
  font-size: 24px;
}

.content_right .news_report {
  width: 385px;
  height: 330px;
  margin-top: 20px;
  background: url(../images/bg_report.png) no-repeat;
}

.content_right .title {
  width: 340px;
  height: 70px;
  color: #00f6ff;
  font-size: 20px;
  line-height: 70px;
  background: url(../images/bottom_line.png) bottom no-repeat;
  text-align: center;
  margin-left: 10px;
}

.content_right .title img {
  vertical-align: middle;
}

.news_list {
  width: 350px;
  height: 240px;
  padding: 10px;
  font-size: 16px;
  overflow: hidden;
}

.news_list ul {
  list-style: none;
}

.news_list ul li {
  width: 100%;
  height: 38px;
  line-height: 38px;
  padding-left: 15px;
}

.li01 {
  background: url(../images/new_list01.png) left center no-repeat;
}

.li02 {
  background: url(../images/new_list02.png) left center no-repeat;
  color: #FF0000;
}

.content_right .data_box {
  width: 385px;
  height: 420px;
  margin-top: 20px;
  float: left;
  background: url(../images/bg_data.png) no-repeat;
}

.data_con {
  width: 365px;
  height: 330px;
  float: left;
  padding: 10px;
}

/*弹窗*/
.pop, .pop2, .pop3 {
  display: none;
  width: 800px;
  min-height: 570px;
  max-height: 750px;
  height: 570px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  padding: 25px;
  z-index: 130;
  border-radius: 3px;
  background-color: #23509a;
  border: #fff solid 1px;
  box-shadow: 0 5px 18px rgba(100, 0, 0, .5);
}

.pop-top {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #ff6f05;
  height: 40px;
  width: 100%;
  background: url(../images/line.png) no-repeat bottom center;
}

.pop-top span {
  float: right;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
}

.pop-foot {
  height: 50px;
  line-height: 50px;
  width: 100%;
  border-top: 1px #5682dc solid;
  text-align: right;
}

.pop-cancel {
  padding: 8px 15px;
  margin: 15px 5px;
  border: none;
  border-radius: 5px;
  background-color: #ff6f05;
  color: #fff;
  cursor: pointer;
}

.pop-content {
  height: 480px;
}

.bgPop, .bgPop2, .bgPop3 {
  display: none;
  //position: abasolute;
  z-index: 129;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .2);
}

.boxall {
  border: 1px solid rgba(103, 144, 255, .1);
  background: rgba(21, 45, 103, .4);
  height: 70%;
  width: 83%;
  padding: .15rem;
  position: relative;
  margin-bottom: .25rem;
  z-index: 10;

  #u4 {
    border-width: 0px;
    position: absolute;
    left: 133px;
    top: 50px;
    width: 149px;
    height: 30px;
    display: flex;
    font-size: 15px;
    color: #01CBD2;
  }

  #u4_img {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 149px;
    height: 30px;
  }

  #u4 .text {
    position: absolute;
    align-self: center;
    padding: 2px 2px 2px 2px;
    box-sizing: border-box;
    width: 100%;
  }

  #u4_text {
    border-width: 0px;
    word-wrap: break-word;
    text-transform: none;
  }

  #u5_img {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 271px;
    height: 18px;
  }

  #u5 {
    border-width: 0px;
    position: absolute;
    left: 72px;
    top: 50px;
    width: 271px;
    height: 18px;
    display: flex;
  }

  #u5 .text {
    position: absolute;
    align-self: center;
    padding: 2px 2px 2px 2px;
    box-sizing: border-box;
    width: 100%;
  }

  #u5_text {
    border-width: 0px;
    word-wrap: break-word;
    text-transform: none;
    visibility: hidden;
  }
}

.boxall2 {
  border: 1px solid rgba(103, 144, 255, .1);
  background: rgba(21, 45, 103, .8);
  height: 70%;
  width: 83%;
  padding: .15rem;
  position: relative;
  margin-bottom: .25rem;
  z-index: 10;
  //background: url(../images/u37.png) no-repeat;
  //background-size: auto 100%;

  #u4 {
    border-width: 0px;
    position: absolute;
    left: 133px;
    top: 50px;
    width: 149px;
    height: 30px;
    display: flex;
    font-size: 15px;
    color: #01CBD2;
  }

  #u4_img {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 149px;
    height: 30px;
  }

  #u4 .text {
    position: absolute;
    align-self: center;
    padding: 2px 2px 2px 2px;
    box-sizing: border-box;
    width: 100%;
  }

  #u4_text {
    border-width: 0px;
    word-wrap: break-word;
    text-transform: none;
  }

  #u5_img {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 271px;
    height: 18px;
  }

  #u5 {
    border-width: 0px;
    position: absolute;
    left: 72px;
    top: 50px;
    width: 271px;
    height: 18px;
    display: flex;
  }

  #u5 .text {
    position: absolute;
    align-self: center;
    padding: 2px 2px 2px 2px;
    box-sizing: border-box;
    width: 100%;
  }

  #u5_text {
    border-width: 0px;
    word-wrap: break-word;
    text-transform: none;
    visibility: hidden;
  }
}

.boxall:before,
.boxall:after {
  position: absolute;
  width: .15rem;
  height: .15rem;
  content: "";
  border-top: 3px solid #3486da;
  top: -2px;
}

.boxall:before, .boxfoot:before {
  border-left: 3px solid #3486da;
  left: -2px;
}

.boxall:after, .boxfoot:after {
  border-right: 3px solid #3486da;
  right: -2px;
}

.boxfoot {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}

.boxfoot:before,
.boxfoot:after {
  position: absolute;
  width: .15rem;
  height: .15rem;
  content: "";
  border-bottom: 3px solid #3486da;
  bottom: -2px;
}

.tit01 {
  background: linear-gradient(to right, rgba(48, 82, 174, .5), rgba(48, 82, 174, 0));
  color: #fff;
  font-size: .2rem;
  padding: .03rem .1rem;
}


.topnav {
  height: calc(50% - .2rem);
  margin-bottom: .2rem;
}

.topnav > ul, .topnav > ul > li, .topnav > ul > li > .boxall {
  height: 100%;
}

.topnav > ul {
}

.topnav > ul > li {
  float: left;
  width: 25%;
}

.topnav > ul > li:nth-child(2) {
  width: 45%;
  padding: 0 .2rem;
}

.topnav > ul > li:nth-child(3) {
  width: 30%;
}

.nav01 {
  height: calc(100% - .3rem);
  padding-top: .2rem;
}

.boxnav {
  height: calc(100% - .4rem);
  padding-top: .1rem;
}

.p2 {
  font-size: .45rem;
  letter-spacing: .05rem;
  font-weight: bold;
  padding: .1rem 0;
  width: 100%;
  text-align: center;
}


.ulheight, .ulheight > li {
  height: 100%;
}

.ulheight > li {
  float: left;
  width: 25%;
}

.ulheight > li:nth-child(2) {
  width: 45%;
  padding: 0 .2rem;
}

.ulheight > li:nth-child(3) {
  width: 30%;
}

.yqlist li {
  float: left;
  width: 33.3333%;
  padding: 10px 0 0 0;
  text-align: center;
}

.yq {
  width: 1.4rem;
  height: 1.4rem;
  line-height: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: .4rem;
  font-family: electronicFont;
  color: #fff;
}

.yq span {
  opacity: .6;
  font-size: .15rem;
  line-height: 100%;
}

.yq:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  background: url(../images/img1.png) center center;
  border-radius: 100px;
  background-size: 100% 100%;
  opacity: .1;
  left: 0;
  top: 0;
  animation: myfirst2 15s infinite linear;
}

.yq:after {
  position: absolute;
  width: 86%;
  background: url(../images/img2.png) center center;
  border-radius: 100px;
  background-size: 100% 100%;
  opacity: .1;
  height: 86%;
  content: "";
  left: 7%;
  top: 7%;
  animation: myfirst 15s infinite linear;
}


li {
  list-style-type: none;
}

i {
  margin: 0px;
  padding: 0px;
  text-indent: 0px;
}


.yqlist li {
  float: left;
  width: 33.3333%;
  padding: 10px 0 0 0;
  text-align: center;
}

.yq {
  width: 1.4rem;
  height: 1.4rem;
  line-height: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: .4rem;
  font-family: electronicFont;
  color: #fff;
}

.yq span {
  opacity: .6;
  font-size: .15rem;
  line-height: 100%;
}

.yq:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  background: url(../images/img1.png) center center;
  border-radius: 100px;
  background-size: 100% 100%;
  opacity: .1;
  left: 0;
  top: 0;
  animation: myfirst2 15s infinite linear;
}

.yq:after {
  position: absolute;
  width: 86%;
  background: url(../images/img2.png) center center;
  border-radius: 100px;
  background-size: 100% 100%;
  opacity: .1;
  height: 86%;
  content: "";
  left: 7%;
  top: 7%;
  animation: myfirst 15s infinite linear;
}


@keyframes myfirst {
  to {
    transform: rotate(-360deg)
  }
}

@keyframes myfirst2 {
  to {
    transform: rotate(360deg)
  }
}


.mainbox {
  position: absolute;
}

.map {
  position: relative;
}

.map4 {
  width: 100%;
  height: 6.5rem;
  position: relative;
  top: .3rem;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.map4 img {
  width: 90%;
}

.map1, .map2, .map3 {
  position: absolute;
  opacity: .5
}

.map1 {
  width: 6.43rem;
  z-index: 2;
  top: .45rem;
  left: .7rem;
  animation: myfirst2 15s infinite linear;
}

.map2 {
  width: 5.66rem;
  top: .85rem;
  left: 1.2rem;
  z-index: 3;
  opacity: 0.2;
  animation: myfirst 10s infinite linear;
}

.map3 {
  width: 5.18rem;
  top: 1.07rem;
  left: 1.4rem;
  z-index: 1;
}

.video {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  .con {
    width: 100%;
    height: 30px;
    line-height: 30px;
  }

  .video-wrap {
    width: 500px;
    height: 300px;
  }
}

.bottoms {
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    background: url(../setting-imgs/main_button.png) center no-repeat;
    text-align: center;
    background-size: auto 80%;
    width: 200px;
    height: 90px;
    color: #00f6ff;
    font-size: 25px;
    font-weight: 800;
    margin-left: 30px;
    margin-top: 10px;
  }
}

.bot_div{
  width: 100%;
  height: 100%;
  background: rebeccapurple;
  display: flex;
  flex-direction: row;
}

.right {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.r-one {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #034f8e;
  padding-bottom: 15px;
  //background: url(../env-imgs/right_back.png) center no-repeat;
  //background-size: auto 100%;
}

.r-two {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #034f8e;
  padding-bottom: 15px;
  //background: url(../env-imgs/right_back.png) center no-repeat;
  //background-size: auto 100%;
}

.r-th {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #034f8e;
  padding-bottom: 15px;

  .row{
    background: #034f8e;
    padding-top: 10px;
  }
  //background: url(../env-imgs/right_back.png) center no-repeat;
  //background-size: auto 100%;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  text{
    text-align: center;
  }
}

.cell {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;

  text-align: center;
}

</style>
