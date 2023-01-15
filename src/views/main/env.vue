<template>
  <div class="main">
    <div class="header">
      环境监控平台
    </div>

    <div class="main_info">
      <div class="left">
        <div class="left-up">
          <img src="../env-imgs/maps.png" style="width: 65%;height: 65%; margin-left: 230px;margin-top: 110px"/>
        </div>
        <div class="left-down">
          <div class="one">
            <div id="chart"></div>
          </div>
          <div class="two">
            <div id="chart2"></div>
          </div>
          <div class="th">
            <div id="chart3"></div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="r-one">
          <div class="row" style="margin-top: 42px">
            <div class="cell">
              <text style="font-weight: 700;font-style: normal;font-size: 22px;color: #01CBD2;">粒子</text>
            </div>
            <div class="cell">
              <text style="font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">粒子数(百万/m³)</text>
            </div>
            <div class="cell">
              <text style="font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">阀值设定</text>
            </div>
          </div>
          <div class="row" style="margin-top: 30px">
            <div class="cell">
              <text style="font-size: 22px;font-weight: 700;font-style: normal;font-size: 16px;color: #01CBD2;">
                0.5um以上粒子
              </text>
            </div>
            <div class="cell">
              <text style="font-size: 22px;font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">{{lz_one}}</text>
            </div>
            <div class="cell">
              <el-input v-model="one" placeholder="阈值" type="number" oninput="if(value>65535)value=65535"
                        style="width: 65px;text-align: center"/>
            </div>
          </div>
          <div class="row" style="margin-top: 30px">
            <div class="cell">
              <text style="font-size: 22px;font-weight: 700;font-style: normal;font-size: 16px;color: #01CBD2;">
                1um以上粒子
              </text>
            </div>
            <div class="cell">
              <text style="font-size: 22px;font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">{{lz_two}}</text>
            </div>
            <div class="cell">
              <el-input v-model="two" placeholder="阈值" type="number" oninput="if(value>65535)value=65535"
                        style="width: 65px;text-align: center"/>
            </div>
          </div>
          <div class="row" style="margin-top: 30px">
            <div class="cell">
              <text style="font-size: 22px;font-weight: 700;font-style: normal;font-size: 16px;color: #01CBD2;">
                5um以上粒子
              </text>
            </div>
            <div class="cell">
              <text style="font-size: 22px;font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">{{lz_thr}}</text>
            </div>
            <div class="cell">
              <el-input v-model="thr" placeholder="阈值" type="number" oninput="if(value>65535)value=65535"
                        style="width: 65px;text-align: center"/>
            </div>
          </div>
        </div>
        <div class="r-two">
          <div class="row" style="margin-top: 42px">
            <div class="cell">
              <text style="font-weight: 700;font-style: normal;font-size: 22px;color: #01CBD2;">荧光粒子</text>
            </div>
            <div class="cell">
              <text style="font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">粒子数(百万/m³)</text>
            </div>
            <div class="cell">
              <text style="font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">阀值设定</text>
            </div>
          </div>
          <div class="row" style="margin-top: 30px">
            <div class="cell">
              <text style="font-size: 22px;font-weight: 700;font-style: normal;font-size: 16px;color: #01CBD2;">
                0.5um以上粒子
              </text>
            </div>
            <div class="cell">
              <text style="font-size: 22px;font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">{{yglz_one}}</text>
            </div>
            <div class="cell">
              <el-input v-model="four" placeholder="阈值" type="number" oninput="if(value>65535)value=65535"
                        style="width: 65px;text-align: center"/>
            </div>
          </div>
          <div class="row" style="margin-top: 30px">
            <div class="cell">
              <text style="font-size: 22px;font-weight: 700;font-style: normal;font-size: 16px;color: #01CBD2;">
                1um以上粒子
              </text>
            </div>
            <div class="cell">
              <text style="font-size: 22px;font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">{{yglz_two}}</text>
            </div>
            <div class="cell">
              <el-input v-model="five" placeholder="阈值" type="number" oninput="if(value>65535)value=65535"
                        style="width: 65px;text-align: center"/>
            </div>
          </div>
          <div class="row" style="margin-top: 30px">
            <div class="cell">
              <text style="font-size: 22px;font-weight: 700;font-style: normal;font-size: 16px;color: #01CBD2;">
                5um以上粒子
              </text>
            </div>
            <div class="cell">
              <text style="font-size: 22px;font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">{{yglz_thr}}</text>
            </div>
            <div class="cell">
              <el-input v-model="six" placeholder="阈值" type="number" oninput="if(value>65535)value=65535"
                        style="width: 65px;text-align: center"/>
            </div>
          </div>
        </div>
        <div class="r-th">
          <div class="row" style="margin-top: 42px">
            <div class="cell">
              <text style="font-weight: 700;font-style: normal;font-size: 22px;color: #01CBD2;">生物粒子</text>
            </div>
            <div class="cell">
              <text style="font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">粒子数(百万/m³)</text>
            </div>
            <div class="cell">
              <text style="font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">阀值设定</text>
            </div>
          </div>
          <div class="row" style="margin-top: 40px">
            <div class="cell">
              <text style="font-size: 22px;font-weight: 700;font-style: normal;font-size: 16px;color: #01CBD2;">
                大粒径生物粒子
              </text>
            </div>
            <div class="cell">
              <text style="font-size: 22px;font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">{{swlz_one}}</text>
            </div>
            <div class="cell">
              <el-input v-model="sev" placeholder="阈值" type="number" oninput="if(value>65535)value=65535"
                        style="width: 65px;text-align: center"/>
            </div>

          </div>
          <div class="row" style="margin-top: 20px">
            <div class="cell">
              <text style="font-size: 22px;font-weight: 700;font-style: normal;font-size: 16px;color: #01CBD2;">
                生物粒子
              </text>
            </div>
            <div class="cell">
              <text style="font-size: 22px;font-weight: 500;font-style: normal;font-size: 16px;color: #01CBD2;">
                {{ swlz_two }}</text>
            </div>
            <div class="cell">
              <el-input v-model="eig" placeholder="阈值" type="number" oninput="if(value>65535)value=65535"
                        style="width: 65px;text-align: center"/>
            </div>
          </div>

          <div class="row" style="margin-top: 30px">
            <el-button type="primary" style="margin-left: 300px" @click="submit">确定</el-button>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>


<script setup>

import {onMounted, ref} from 'vue'
import * as echarts from "echarts";
import mainJson from "@/assets/mJson.json";

const one = ref(10)
const two = ref(5)
const thr = ref(1)
const four = ref(10)
const five = ref(5)
const six = ref(1)
const sev = ref(10)
const eig = ref(5)

const a_one = ref(0xaa)//固定
const a_two = ref(0x55)//固定
const a_thr = ref(0x96)//固定
const a_four = ref(0x10)//设备标识
const a_five = ref(0x25)//长度
const a_six = ref(0x32)//长度

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





const colors = ['#5470C6', '#91CC75', '#EE6666'];
const option = {
  // legend: {},
  // tooltip: {},
  dataset: {
    dimensions: ['product', '0.5um以上粒子', '1um以上粒子', '5um以上粒子'],
    source: [
      {product: '1s', '0.5um以上粒子': 43.3, '1um以上粒子': 85.8, '5um以上粒子': 93.7},
      {product: '2s', '0.5um以上粒子': 83.1, '1um以上粒子': 73.4, '5um以上粒子': 55.1},
      {product: '3s', '0.5um以上粒子': 86.4, '1um以上粒子': 65.2, '5um以上粒子': 82.5},
      {product: '4s', '0.5um以上粒子': 72.4, '1um以上粒子': 53.9, '5um以上粒子': 39.1},
      {product: '5s', '0.5um以上粒子': 62.4, '1um以上粒子': 13.9, '5um以上粒子': 29.1},
    ]
  },
  xAxis: {type: 'category'},
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{type: 'bar'}, {type: 'bar'}, {type: 'bar'}]
};

const option2 = {
  // legend: {},
  // tooltip: {},
  dataset: {
    dimensions: ['product', '0.5um以上粒子', '1um以上粒子', '5um以上粒子'],
    source: [
      {product: '1s', '0.5um以上粒子': 43.3, '1um以上粒子': 85.8, '5um以上粒子': 93.7},
      {product: '2s', '0.5um以上粒子': 83.1, '1um以上粒子': 73.4, '5um以上粒子': 55.1},
      {product: '3s', '0.5um以上粒子': 86.4, '1um以上粒子': 65.2, '5um以上粒子': 82.5},
      {product: '4s', '0.5um以上粒子': 72.4, '1um以上粒子': 53.9, '5um以上粒子': 39.1},
      {product: '5s', '0.5um以上粒子': 62.4, '1um以上粒子': 13.9, '5um以上粒子': 29.1},
    ]
  },
  xAxis: {type: 'category'},
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{type: 'bar'}, {type: 'bar'}, {type: 'bar'}]
};

const option3 = {
  // legend: {},
  // tooltip: {},
  dataset: {
    dimensions: ['product', '大粒径生物粒子', '生物粒子'],
    source: [
      {product: '1s', '大粒径生物粒子': 43.3, '生物粒子': 85.8},
      {product: '2s', '大粒径生物粒子': 83.1, '生物粒子': 73.4},
      {product: '3s', '大粒径生物粒子': 86.4, '生物粒子': 65.2},
      {product: '4s', '大粒径生物粒子': 72.4, '生物粒子': 53.9},
      {product: '5s', '大粒径生物粒子': 62.4, '生物粒子': 13.9},
    ]
  },
  xAxis: {type: 'category'},
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{type: 'bar'}, {type: 'bar'}]
};


//拆分出高位低位
const check_position = (data) => {
  let len = data.length
  let one = ''
  let two = ''
  if (len == 0) {
    //高位需要补0
    //低位直接取
    one = '00'
    two = '00'
  } else if (len == 1) {
    one = '00'
    two = '0' + data.charAt(0);
  } else if (len == 2) {
    //高位需要补0
    //低位直接取
    one = '00'
    two = data.charAt(0) + data.charAt(1)
  } else if (len == 3) {
    //高位需要补0
    //低位直接取
    one = '0' + data.charAt(0);
    two = data.charAt(1) + data.charAt(2)
  } else if (len == 4) {
    //正常取
    one = data.charAt(0) + data.charAt(1)
    two = data.charAt(2) + data.charAt(3)
  }

  return [one, two]
}


const submit = () => {
  //阈值下发
  console.log('阈值下发')
  let arr = []
  // let one = parseInt('0x' + check_position(left_data)[0])
  // let two = parseInt('0x' + check_position(left_data)[1])
  // 数据头（3字节）：AAH、55H、96H
  // 设备（1字节）：10H
  // 数据长度（1字节）：25H
  // 命令字（1字节）：32H
  // 数据（19字节）：
  // 	第1、2字节：0.5um以上粒子数量（高位在前） one
  // 	第3、4字节：1.0um以上粒子数量（高位在前） two
  // 	第5、6字节：5.0um以上粒子数量（高位在前） thr
  // 	第7、8字节：0.5um以上荧光粒子数量（高位在前） four
  // 	第9、10字节：1.0um以上荧光粒子数量（高位在前） five
  // 	第11、12字节：5.0um以上荧光粒子数量（高位在前） six
  // 	第13、14字节：大粒径生物粒子数（高位在前） sev
  // 	第15、16字节：生物粒子数（高位在前） eig
  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字

}


onMounted(() => {

  setDada(mainJson)

  const chartDom = document.getElementById('chart')
  const chart = echarts.init(chartDom)
  chart.setOption(option)

  const chartDom2 = document.getElementById('chart2')
  const chart2 = echarts.init(chartDom2)
  chart2.setOption(option2)

  const chartDom3 = document.getElementById('chart3')
  const chart3 = echarts.init(chartDom3)
  chart3.setOption(option3)

})

//给本页面的UI控件赋值方法
const setDada = (Json) => {
  //粒子数相关Json
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

.main_info {
  width: 100%;
  height: 1080px;
  display: flex;
  flex-direction: row;
}

.left {
  width: 70%;
  height: 1080px;
  display: flex;
  flex-direction: column;
}

.left-up {
  width: 100%;
  height: 55%;
  background: url(../env-imgs/back.png) center no-repeat;
  background-size: auto 105%;
  margin-left: -40px;
}

.left-down {
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  //background: #42b983;
}

.one {
  width: 330px;
  height: 330px;
  background: url(../env-imgs/echarts_back.png) center no-repeat;
  background-size: auto 100%;
}

.two {
  width: 330px;
  height: 330px;
  background: url(../env-imgs/echarts_back.png) center no-repeat;
  background-size: auto 100%;
  margin-left: 20px;
}

.th {
  width: 330px;
  height: 330px;
  margin-left: 20px;
  background: url(../env-imgs/echarts_back.png) center no-repeat;
  background-size: auto 100%;
}

.right {
  width: 33%;
  height: 1080px;
  display: flex;
  flex-direction: column;
}

.r-one {
  width: 520px;
  height: 27%;
  background: url(../env-imgs/right_back.png) center no-repeat;
  background-size: auto 100%;
}

.r-two {
  width: 520px;
  height: 27%;
  margin-top: 30px;
  background: url(../env-imgs/right_back.png) center no-repeat;
  background-size: auto 100%;
}

.r-th {
  width: 520px;
  height: 27%;
  margin-top: 30px;
  background: url(../env-imgs/right_back.png) center no-repeat;
  background-size: auto 100%;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.cell {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;

  text-align: center;
}


.el-input__inner {
  background-color: #e8e8e8;
  text-align: center;
  border-color: #c0c4cc;
  color: #000
}

#chart {
  width: 330px;
  height: 350px;
  margin-left: 10px;
  margin-top: 10px;
}

#chart2 {
  width: 330px;
  height: 350px;
  margin-left: 10px;
  margin-top: 10px;
}

#chart3 {
  width: 330px;
  height: 350px;
  margin-left: 10px;
  margin-top: 10px;
}


</style>