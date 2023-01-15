<template>
  <div class="main">
    <div class="header">
      无人机监控平台
    </div>
    <div class="top">
      <div class="top-left">
        <text style="font-size: 22px;font-weight: 700;color:#00f6ff;margin-left: 400px;margin-top: 28px">
          无人机路线规划
        </text>
        <img src="../uav-imgs/u201.png"
             style="width: 550px;height:310px;margin-left: 200px;filter:opacity(0.85);;margin-top: 40px;"/>
      </div>
      <div class="top-right">
        <text style="font-size: 22px;font-weight: 700;color:#00f6ff;margin-left: 420px;margin-top: 30px">
          无人机实时监控
        </text>
        <img src="../uav-imgs/u202.png" style="width: 680px;height:390px;margin-left: 143px;margin-top: 5px"/>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-left">
        <img src="../uav-imgs/controler.png" style="margin-left: 108px;width: 830px;height: 390px;margin-top: 80px">
      </div>
      <div class="bottom-right">
        <div class="form">
          <div class='circle4'>
            <text style="margin-left: 2px">速度：</text>
            <text>{{wrj_speed}}</text>
          </div>
          <div class='circle5'>
            <text style="margin-left: 10px">高度：</text>
            <text>{{wrj_height}}</text>
          </div>
        </div>
        <div class="form2">
          <div class='circle'>
            <text>报警：</text>
            <text>{{wrj_warning}}</text>
          </div>

          <img src="../uav-imgs/u_mode.png" style="width: 300px;height: 190px;margin-left: 30px;margin-top: 30px">
          <div class='circle3'>
            <text style="margin-left:20px">信号：</text>
            <text>{{wrj_status}}</text>
          </div>
        </div>
        <div class="form3">
          <div class='circle2'>
            <text style="margin-left: 10px">电池：</text>
            <text>{{wrj_power}}</text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>

import {onMounted, ref} from "vue";
import  mainJson from '../../assets/mJson.json'


// const sure = ()=>{
//   console.log('点击了确定按钮，保存了设置')
// }

onMounted(() => {
  setDada(mainJson)
})

//无人机
const wrj_height = ref('275m')//高度
const wrj_speed = ref('300km/h')//速度
const wrj_power = ref(77)//电量
const wrj_status = ref('正常')// 状态
const wrj_warning = ref('无')// 报警信息


//给本页面的UI控件赋值方法
const setDada = (Json) => {
  //2 无人机相关Json
  let wrj = Json.wurenji.wrjinfo

  wrj_height.value = wrj.height //高度
  wrj_speed.value = wrj.speed //速度
  wrj_power.value = wrj.power //电量
  wrj_status.value = wrj.status //状态
  wrj_warning.value = wrj.warning //报警信息
}


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

.main {
  width: 100%;
  height: 1064px;
  margin: 20px auto 0 auto;
  background: #0b122e;
}

.header {
  width: 100%;
  height: 10%;
  background: url(../images/bg_top.png) center no-repeat;
  text-align: center;
  font-weight: bold;
  font-size: 38px;
  color: #00f6ff;
  line-height: 90px;
  margin: 0 auto;
}

.top {
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: row;
}

.bottom {
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: row;
}

.top-left {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url(../uav-imgs/maps_back.png) center no-repeat;
  background-size: auto 100%;
}

.top-right {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url(../uav-imgs/monitor_back.png) center no-repeat;
  background-size: auto 100%;
}

.bottom-left {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.bottom-right {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url(../uav-imgs/data_back.png) center no-repeat;
  background-size: auto 100%;
}

.form {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 90px;

  text {
    font-weight: 700;
    font-size: 24px;
    color: #00f6ff;
  }
}

.form2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  text {
    font-weight: 700;
    font-size: 24px;
    color: #00f6ff;
  }
}

.form3 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  text {
    font-weight: 700;
    font-size: 24px;
    color: #00f6ff;
  }
}

.circle {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #0066cc;
  //background: url(../uav-imgs/tra_back2.png) center no-repeat;
  background-size: auto 100%;
  padding: 2px;
  width: 120px;
}

.circle2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #0066cc;
  //background: url(../uav-imgs/tra_back2.png) center no-repeat;
  background-size: auto 100%;
  padding: 2px;
  width: 160px;
}

.circle3 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #0066cc;
  //background: url(../uav-imgs/tra_back2.png) center no-repeat;
  background-size: auto 100%;
  padding: 2px;
  padding-right: 35px;
  margin-left: 17px;
}

.circle4 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #0066cc;
  //background: url(../uav-imgs/tra_back2.png) center no-repeat;
  background-size: auto 100%;
  padding: 2px;
}
.circle5 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #0066cc;
  background-size: auto 100%;
  padding: 2px;
  margin-left: 70px;
}



</style>