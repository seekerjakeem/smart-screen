<template>
  <div class="main">
    <div class="header">
      设置
    </div>
    <div class="top">
      <div class="top-left">
        <text style="color: white;font-weight: 900;font-size: 34px;margin-left: 100px;margin-top: 50px">串口设置</text>
        <div class="form-div">
          <text style="font-size: 22px;color: white;font-weight: 600">端口号</text>
          <el-input v-model="dPort" class="w-50 m-2" placeholder="请输入端口号" style="width: 130px;margin-left: 20px"/>

          <text style="font-size: 22px;color: white;font-weight: 600;margin-left: 80px">数据位</text>
          <el-input v-model="dataPosition" class="w-50 m-2" placeholder="请输入数据位"
                    style="width: 130px;margin-left: 20px"/>
        </div>
        <div class="form-div">
          <text style="font-size: 22px;color: white;font-weight: 600">波特率</text>
          <el-input v-model="btl" class="w-50 m-2" placeholder="请输入波特率" style="width: 130px;margin-left: 20px"/>

          <text style="font-size: 22px;color: white;font-weight: 600;margin-left: 80px">停止位</text>
          <el-input v-model="txw" class="w-50 m-2" placeholder="请输入停止位" style="width: 130px;margin-left: 20px"/>
        </div>
        <div class="form-div">
          <text style="font-size: 22px;color: white;font-weight: 600">校验位</text>
          <el-input v-model="jyw" class="w-50 m-2" placeholder="请输入校验位" style="width: 130px;margin-left: 20px"/>
        </div>
      </div>
      <div class="top-right">
        <text style="color: white;font-weight: 900;font-size: 34px;margin-left: 330px">转发串口设置</text>
        <div class="form-div">
          <text style="font-size: 22px;color: white;font-weight: 600;margin-left: 180px">端口号</text>
          <el-input v-model="zfckPort" class="w-50 m-2" placeholder="请输入端口号"
                    style="width: 130px;margin-left: 25px"/>
        </div>

        <div class="form-div">
          <text style="font-size: 22px;color: white;font-weight: 600;margin-left: 230px">波特率</text>
          <el-input v-model="zfckBtl" class="w-50 m-2" placeholder="请输入波特率"
                    style="width: 133px;margin-left: 30px"/>
        </div>

        <div class="form-div">
          <text style="font-size: 22px;color: white;font-weight: 600;margin-left: 260px">校验位</text>
          <el-input v-model="zfckXyw" class="w-50 m-2" placeholder="请输入校验位"
                    style="width: 130px;margin-left: 25px"/>
        </div>

        <div class="form-div">
          <text style="font-size: 22px;color: white;font-weight: 600;margin-left: 280px">数据位</text>
          <el-input v-model="zfckData" class="w-50 m-2" placeholder="请输入数据位"
                    style="width: 133px;margin-left: 30px"/>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-left">
        <div class="form-div">
          <text style="font-size: 22px;color: white;font-weight: 600;margin-left: 70px">服务器IP</text>
          <el-input v-model="fwIp" class="w-50 m-2" placeholder="请输入服务器IP"
                    style="width: 130px;margin-left: 25px"/>
        </div>

        <div class="form-div">
          <text style="font-size: 22px;color: white;font-weight: 600;margin-left: 150px">服务器Port</text>
          <el-input v-model="fwPort" class="w-50 m-2" placeholder="请输入服务器Port"
                    style="width: 133px;margin-left: 30px"/>
        </div>
        <text style="color: white;font-weight: 900;font-size: 34px;margin-left: 450px; margin-top: 103px">服务器设置
        </text>
      </div>
      <div class="bottom-right">
        <div class="form-div">
          <text style="font-size: 22px;color: white;font-weight: 600;margin-left: 270px">Kafak IP</text>
          <el-input v-model="kafakIP" class="w-50 m-2" placeholder="请输入Kafak IP"
                    style="width: 130px;margin-left: 25px"/>
        </div>

        <div class="form-div">
          <text style="font-size: 22px;color: white;font-weight: 600;margin-left: 247px">Kafak User</text>
          <el-input v-model="kafakUser" class="w-50 m-2" placeholder="请输入Kafak User"
                    style="width: 133px;margin-left: 10px"/>
        </div>

        <div class="form-div">
          <text style="font-size: 22px;color: white;font-weight: 600;margin-left: 220px">Kafak Port</text>
          <el-input v-model="kafakPort" class="w-50 m-2" placeholder="请输入Kafak Port"
                    style="width: 130px;margin-left: 25px"/>
        </div>

        <div class="form-div">
          <text style="font-size: 22px;color: white;font-weight: 600;margin-left: 170px">Kafak Passwd</text>
          <el-input v-model="kafakPasswd" class="w-50 m-2" placeholder="请输入Kafak Passwd"
                    style="width: 155px;margin-left: 30px"/>
        </div>

        <text style="color: white;font-weight: 900;font-size: 34px;margin-left: 630px;margin-top: -5px">Kafka设置</text>

        <img @click="sure" src="../setting-imgs/Sure.png"
             style="width: 200px;height: 80px;margin-left: -100px;margin-top: 90px"/>
      </div>
    </div>
  </div>
</template>


<script setup>

import {ref} from "vue";

const dPort = ref('')  //端口
const dataPosition = ref('') //数据位
const btl = ref('') //波特率
const txw = ref('') //停止位 校验位
const jyw = ref('') //校验位

const fwIp = ref('') //服务器IP
const fwPort = ref('') //服务器Port


const zfckPort = ref('') //转发串口设置端口号
const zfckBtl = ref('') //转发串口设置波特率
const zfckXyw = ref('') //转发串口设置校验位
const zfckData = ref('') //转发串口设置数据位

const kafakIP = ref('') //Kafak IP
const kafakUser = ref('') //Kafak User
const kafakPort = ref('') //Kafak Port
const kafakPasswd = ref('') //Kafak Passwd

const sure = () => {
  console.log('点击了确定按钮，保存了设置')
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

.main {
  //width: 1920px;
  margin: 0;
  padding: 0;
  height: 1080px;
  background: url(../setting-imgs/setting-back.jpg) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
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
  //background: #dddddd;
}

.top-right {
  width: 50%;
  height: 100%;
  padding-top: 66px;
  //background: greenyellow;
}

.bottom-left {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //background: deepskyblue;

}

.bottom-right {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.form-div {
  display: flex;
  flex-direction: row;
  margin-left: 100px;
  margin-top: 30px;
  //justify-content: center;
  //align-items: center;
}

</style>