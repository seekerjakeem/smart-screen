<template>
  <div class="main">
    <div class="header">
      移动机器人监控平台
    </div>
    <div class="three-video">
      <div class="one">
        <video1 style="width: 520px;height: 400px;margin-top: 105px"/>
      </div>
      <div class="two">
        <video2 style="width: 520px;height: 400px;margin-top: 105px"/>
      </div>
      <div class="three">
        <video3 style="width: 520px;height: 400px;margin-top: 105px"/>
      </div>

    </div>

    <div class="main-control">
      <div class="left">
        <div class="r_1">
          <div class="row_1">
            <text>关节1</text>
            <div class="row-btn">
              <img @mousedown="one_left" @mouseup="one_leave" src="../jxb-imgs/left_btn.png"/>
              <img @mousedown="one_right" @mouseup="one_leave" src="../jxb-imgs/right_btn.png"/>
            </div>

          </div>

          <div class="row_2">
            <text>关节2</text>
            <div class="row-btn">
              <img @mousedown="two_left" @mouseup="two_leave" src="../jxb-imgs/left_btn.png"/>
              <img @mousedown="two_right" @mouseup="two_leave" src="../jxb-imgs/right_btn.png"/>
            </div>

          </div>

          <div class="row_2">
            <text>关节3</text>
            <div class="row-btn">
              <img @mousedown="three_left" @mouseup="three_leave" src="../jxb-imgs/left_btn.png"/>
              <img @mousedown="three_right" @mouseup="three_leave" src="../jxb-imgs/right_btn.png"/>
            </div>

          </div>
        </div>

        <div class="r_1">
          <div class="row_1">
            <text>关节4</text>
            <div class="row-btn">
              <img @mousedown="four_left" @mouseup="four_leave" src="../jxb-imgs/left_btn.png"/>
              <img @mousedown="four_right" @mouseup="four_leave" src="../jxb-imgs/right_btn.png"/>
            </div>

          </div>

          <div class="row_2">
            <text>关节5</text>
            <div class="row-btn">
              <img @mousedown="five_left" @mouseup="five_leave" src="../jxb-imgs/left_btn.png"/>
              <img @mousedown="five_right" @mouseup="five_leave" src="../jxb-imgs/right_btn.png"/>
            </div>

          </div>

          <div class="row_2">
            <text>关节6</text>
            <div class="row-btn">
              <img @mousedown="six_left" @mouseup="six_leave" src="../jxb-imgs/left_btn.png"/>
              <img @mousedown="six_right" @mouseup="six_leave" src="../jxb-imgs/right_btn.png"/>
            </div>

          </div>
        </div>

        <div class="r_1">
          <div class="row_1">
            <text>末端工具</text>
            <div class="row-btn">
              <img @mousedown="seven_left" @mouseup="seven_leave" src="../jxb-imgs/left_btn.png"/>
              <img @mousedown="seven_right" @mouseup="seven_leave" src="../jxb-imgs/right_btn.png"/>
            </div>
          </div>

          <div class="row_2">
            <text>备用</text>
            <div class="row-btn">
              <img @mousedown="bei1_left" src="../jxb-imgs/left_btn.png"/>
              <img @mousedown="bei1_right" src="../jxb-imgs/right_btn.png"/>
            </div>
          </div>

          <div class="row_2">
            <text>备用</text>
            <div class="row-btn">
              <img @mousedown="bei2_left" src="../jxb-imgs/left_btn.png"/>
              <img @mousedown="bei2_right" src="../jxb-imgs/right_btn.png"/>
            </div>
          </div>


        </div>

      </div>
      <div class="middle">
        <div class="middle-icons">
          <div class="row-one">
            <img @click="one" src="../jxb-imgs/u139.svg"/>
            <img @mousedown="up" @mouseup="pause" src="../jxb-imgs/u144.svg"/>
            <img @click="two" src="../jxb-imgs/u138.svg"/>
          </div>
          <div class="row-two">
            <img @mousedown="left" @mouseup="pause" src="../jxb-imgs/u143.svg" style="width: 65px;height: 65px"/>
            <img @click="pause" src="../jxb-imgs/pause.png" style="width: 65px;height: 65px"/>
            <img @mousedown="right" @mouseup="pause" src="../jxb-imgs/u142.svg" style="width: 65px;height: 65px"/>
          </div>
          <div class="row-th">
            <img @click="three" src="../jxb-imgs/u140.svg" style="width: 52px;height: 52px;"/>
            <img @mousedown="down" @mouseup="pause" src="../jxb-imgs/u145.svg"/>
            <img @click="four" src="../jxb-imgs/u137.svg"/>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-main">
          <div class="right_1">
            <text style="margin-bottom: 5px">作业任务：</text>
            <el-radio-group v-model="radio" @change="radio_change" size="large" text-color="#00f6ff">
              <el-radio label="取水任务" size="large">取水任务</el-radio>
              <el-radio label="取土任务" size="large" style="margin-left: 10px">取土任务</el-radio>
              <el-radio label="消杀任务" size="large" style="margin-left: 10px">消杀任务</el-radio>
              <el-radio label="表面取样" size="large" style="margin-left: 10px">表面取样</el-radio>
            </el-radio-group>
          </div>

          <div class="right_1" style="margin-top: 20px;">
            <!--            <el-rate v-model="start1" :colors="colors" disabled="true"/>-->
            <!--            <el-rate v-model="start1" :colors="colors" disabled="true"/>-->
            <!--            <el-rate v-model="start1" :colors="colors" disabled="true"/>-->
            <!--            <el-rate v-model="start1" :colors="colors" disabled="true"/>-->

          </div>


          <div class="right_1" style="margin-top: 30px;">
            <text style="">
              档位：
            </text>
            <div class="demo-progress">
              <el-progress :percentage="percentage" :color="customColors" :show-text="true" :stroke-width="26"
                           :format="format"/>
              <div>
                <el-button-group style="margin-left: 5px">
                  <el-button :icon="Minus" @click="decrease"/>
                  <el-button :icon="Plus" @click="increase"/>
                </el-button-group>
              </div>
            </div>
          </div>

          <div class="right_1" style="margin-top: 30px;">
            <text>当前电量：</text>
            <div class="demo-progress" style="margin-bottom: 18px">
              <el-progress :text-inside="true" :stroke-width="26" :percentage="per" style="margin-top: 20px"/>
            </div>
          </div>
          <div class="right_1" style="margin-top: 30px;">
            <text>车前灯</text>
            <el-switch
                style="margin-left: 20px"
                v-model="value1"
                size="large"
            />
            <text style="margin-left: 50px">车尾灯</text>
            <el-switch
                style="margin-left: 20px"
                v-model="value2"
                size="large"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import video1 from '../../components/video1'
import video2 from '../../components/video2'
import video3 from '../../components/video3'
import {ElMessage} from 'element-plus'
import {onMounted, ref} from 'vue'
import socket from '../../socket/index'
import {Minus, Plus} from '@element-plus/icons-vue'
import  mainJson from '../../assets/mJson.json'

const percentage = ref(20)
const per = ref(60)
const startLight = ref(true)
const endLight = ref(true)

// {"serial": "指令"}


onMounted(() => {
  // const hex2 = (2500).toString(16);
  // console.log(hex2);
  setDada(mainJson)
})

const setDada = (Json) => {
  //当前电量
  per.value = Json.robotplatinfo.lvdai.lvdaipower
  console.log(Json)
  //车前灯
  value1.value = Json.connstatus.chedeng
  //车尾灯
  value2.value = Json.connstatus.chedeng
  // per.value = Json.robotplatinfo.lvdai.lvdaipower
  // console.log(Json)
}




const customColors = [
  {color: '#f56c6c', percentage: 20},
  {color: '#e6a23c', percentage: 40},
  {color: '#5cb87a', percentage: 60},
  {color: '#1989fa', percentage: 80},
  {color: '#9932CD', percentage: 100},
]
const increase = () => {
  percentage.value += 20
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 20
  if (percentage.value < 0) {
    percentage.value = 0
  }
}
const format = (percentage) => {
  if (percentage == 0) {
    //console.log('0档' + percentage)
    dang.value = 0
    return "0档"
  } else if (percentage > 0 && percentage <= 20) {
    //console.log('1档' + percentage)
    dang.value = 1
    return "1档"
  } else if (percentage > 20 && percentage <= 40) {
    //console.log('2档' + percentage)
    dang.value = 2
    return "2档"
  } else if (percentage > 40 && percentage <= 60) {
    //console.log('3档' + percentage)
    dang.value = 3
    return "3档"
  } else if (percentage > 60 && percentage <= 80) {
    //console.log('4档' + percentage)
    dang.value = 4
    return "4档"
  } else if (percentage > 80 && percentage <= 100) {
    //console.log('5档' + percentage)
    dang.value = 5
    return "5档"
  }
}
const radio = ref('取水任务')
const value1 = ref(true)
const value2 = ref(false)
const a_one = ref(0xaa)//固定
const a_two = ref(0x55)//固定
const a_thr = ref(0x96)//固定
const a_four = ref(0x10)//设备标识
const a_five = ref(0x04)//长度
const a_six = ref('')//命令字
const a_sev = ref('')//左轮数据1
const a_eig = ref('')//左轮数据2
const a_sev1 = ref('')//右轮数据1
const a_eig2 = ref('')//右轮数据2
const a_nine = ref('')//校验码

const start1 = ref(null)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])

const dang = ref(0)

//拆分出高位低位
const check_position = (data) => {
  let len = data.length
  let one = ''
  let two = ''
  if (len == 3) {
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

//-----------------------------------------上下左右停止-----------------------------------------
//左上
const one = () => {
  console.log('左上')
}
//右上
const two = () => {
  console.log('右上')
}
//左下
const three = () => {
  console.log('左下')
}
//右下
const four = () => {
  console.log('右下')
}
//上
const up = () => {
  // const hex2 = (2500).toString(16);
  // console.log(hex2);
  //根据档位进行计算
  //停止为2500
  //16进制是9C4
  //高位 09
  //低位 C4
  //拿到dang位

  console.log('上')
  let arr = []
  a_five.value = 0x06//数据长度（1字节）
  a_six.value = 0x24//命令字（1字节）
  console.log(2500 - dang.value * 500)
  const left_data = (2500 - dang.value * 500).toString(16);
  console.log(left_data)
  let one = parseInt('0x' + check_position(left_data)[0])
  let two = parseInt('0x' + check_position(left_data)[1])

  a_sev.value = one//左侧电机数据1（2字节） 第一、二字节：左侧电机速度（高位在前）
  a_eig.value = two//左侧电机数据2（2字节） 第三、四字节：左侧电机速度（高位在前）
  a_sev1.value = one//右侧电机数据1（2字节） 第一、二字节：右侧电机速度（高位在前）
  a_eig2.value = two//右侧电机数据2（2字节） 第三、四字节：右侧电机速度（高位在前）
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value ^ a_sev1.value ^ a_eig2.value  //校验码  数据长度、命令字、数据按字节异或


  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//左侧电机速度 数据1
  arr.push(a_eig.value)//左侧电机速度 数据2
  arr.push(a_sev1.value)//右侧电机速度 数据1
  arr.push(a_eig2.value)//右侧电机速度 数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}
}
//下
const down = () => {
  console.log('下')
  // const hex2 = (2500).toString(16);
  // console.log(hex2);
  //根据档位进行计算
  //停止为2500
  //16进制是9C4
  //高位 09
  //低位 C4
  //拿到dang位
  let arr = []
  a_five.value = 0x06//数据长度（1字节）
  a_six.value = 0x24//命令字（1字节）
  console.log(2500 + dang.value * 500)
  const left_data = (2500 + dang.value * 500).toString(16);
  console.log(left_data)
  let one = parseInt('0x' + check_position(left_data)[0])
  let two = parseInt('0x' + check_position(left_data)[1])

  a_sev.value = one//左侧电机数据1（2字节） 第一、二字节：左侧电机速度（高位在前）
  a_eig.value = two//左侧电机数据2（2字节） 第三、四字节：左侧电机速度（高位在前）
  a_sev1.value = one//右侧电机数据1（2字节） 第一、二字节：右侧电机速度（高位在前）
  a_eig2.value = two//右侧电机数据2（2字节） 第三、四字节：右侧电机速度（高位在前）
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value ^ a_sev1.value ^ a_eig2.value  //校验码  数据长度、命令字、数据按字节异或


  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//左侧电机速度 数据1
  arr.push(a_eig.value)//左侧电机速度 数据2
  arr.push(a_sev1.value)//右侧电机速度 数据1
  arr.push(a_eig2.value)//右侧电机速度 数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}
}
//左
const left = () => {
  console.log('左')
  // const hex2 = (2500).toString(16);
  // console.log(hex2);
  //根据档位进行计算
  //停止为2500
  //16进制是9C4
  //高位 09
  //低位 C4
  //拿到dang位
  let arr = []
  a_five.value = 0x06//数据长度（1字节）
  a_six.value = 0x24//命令字（1字节）
  console.log(2500 + dang.value * 500)
  const left_data = (2500 - dang.value * 500).toString(16);
  const right_data = (2500 + dang.value * 500).toString(16);
  console.log(left_data)
  let one = parseInt('0x' + check_position(left_data)[0])
  let two = parseInt('0x' + check_position(left_data)[1])

  let th = parseInt('0x' + check_position(right_data)[0])
  let fou = parseInt('0x' + check_position(right_data)[1])

  a_sev.value = one//左侧电机数据1（2字节） 第一、二字节：左侧电机速度（高位在前）
  a_eig.value = two//左侧电机数据2（2字节） 第三、四字节：左侧电机速度（高位在前）
  a_sev1.value = th//右侧电机数据1（2字节） 第一、二字节：右侧电机速度（高位在前）
  a_eig2.value = fou//右侧电机数据2（2字节） 第三、四字节：右侧电机速度（高位在前）
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value ^ a_sev1.value ^ a_eig2.value  //校验码  数据长度、命令字、数据按字节异或


  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//左侧电机速度 数据1
  arr.push(a_eig.value)//左侧电机速度 数据2
  arr.push(a_sev1.value)//右侧电机速度 数据1
  arr.push(a_eig2.value)//右侧电机速度 数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}
}
//右
const right = () => {
  console.log('右')
  // const hex2 = (2500).toString(16);
  // console.log(hex2);
  //根据档位进行计算
  //停止为2500
  //16进制是9C4
  //高位 09
  //低位 C4
  //拿到dang位
  let arr = []
  a_five.value = 0x06//数据长度（1字节）
  a_six.value = 0x24//命令字（1字节）
  console.log(2500 + dang.value * 500)
  const left_data = (2500 + dang.value * 500).toString(16);
  const right_data = (2500 - dang.value * 500).toString(16);
  console.log(left_data)
  let one = parseInt('0x' + check_position(left_data)[0])
  let two = parseInt('0x' + check_position(left_data)[1])

  let th = parseInt('0x' + check_position(right_data)[0])
  let fou = parseInt('0x' + check_position(right_data)[1])

  a_sev.value = one//左侧电机数据1（2字节） 第一、二字节：左侧电机速度（高位在前）
  a_eig.value = two//左侧电机数据2（2字节） 第三、四字节：左侧电机速度（高位在前）
  a_sev1.value = th//右侧电机数据1（2字节） 第一、二字节：右侧电机速度（高位在前）
  a_eig2.value = fou//右侧电机数据2（2字节） 第三、四字节：右侧电机速度（高位在前）
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value ^ a_sev1.value ^ a_eig2.value  //校验码  数据长度、命令字、数据按字节异或


  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//左侧电机速度 数据1
  arr.push(a_eig.value)//左侧电机速度 数据2
  arr.push(a_sev1.value)//右侧电机速度 数据1
  arr.push(a_eig2.value)//右侧电机速度 数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}
}
//停止
const pause = () => {

  // const hex2 = (2500).toString(16);
  // console.log(hex2);
  //根据档位进行计算
  //停止为2500
  //16进制是9C4
  //高位 09
  //低位 C4
  console.log('停止')
  let arr = []
  a_five.value = 0x06//数据长度（1字节）
  a_six.value = 0x24//命令字（1字节）
  a_sev.value = 0x09//左侧电机数据1（2字节） 第一、二字节：左侧电机速度（高位在前）
  a_eig.value = 0xC4//左侧电机数据2（2字节） 第三、四字节：左侧电机速度（高位在前）
  a_sev1.value = 0x09//右侧电机数据1（2字节） 第一、二字节：右侧电机速度（高位在前）
  a_eig2.value = 0xC4//右侧电机数据2（2字节） 第三、四字节：右侧电机速度（高位在前）
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value ^ a_sev1.value ^ a_eig2.value  //校验码  数据长度、命令字、数据按字节异或


  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//左侧电机速度 数据1
  arr.push(a_eig.value)//左侧电机速度 数据2
  arr.push(a_sev1.value)//右侧电机速度 数据1
  arr.push(a_eig2.value)//右侧电机速度 数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}
}

//-----------------------------------------上下左右停止-----------------------------------------

const radio_change = (name) => {
  console.log(name)
  // 取水任务
  // 取土任务
  // 消杀任务
  // 表面取样
  if (name == '取水任务') {

  } else if (name == '取土任务') {

  } else if (name == '消杀任务') {

  } else if (name == '表面取样') {

  }
}


const one_left = () => {
  console.log('关节1:左（正转）')
  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x01'
  a_eig.value = '0x01'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}
  //
  ElMessage({
    message: '关节1:正转',
    type: 'success',
    duration: '1200',
    center: true,
  })
}
//-----------------------------------------关节指令-----------------------------------------
const one_right = () => {
  console.log('关节1:右（反转）')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x01'
  a_eig.value = '0x02'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}

  ElMessage({
    message: '关节1:右（反转）',
    type: 'success',
    duration: '1200',
    center: true,
  })
}
const one_leave = () => {
  console.log('关节1:停止')
  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x01'
  a_eig.value = '0x00'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  socket.emit(arr)

  ElMessage({
    message: '关节1:停止',
    type: 'warning',
    duration: '1200',
    center: true,
  })
}
const two_left = () => {
  console.log('关节2:正转')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x02'
  a_eig.value = '0x01'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  socket.emit(arr)


  ElMessage({
    message: '关节2:正转',
    type: 'success',
    duration: '1200',
    center: true,
  })
}
const two_right = () => {
  console.log('关节2:正转')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x02'
  a_eig.value = '0x02'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}

  ElMessage({
    message: '关节2:反转',
    type: 'success',
    duration: '1200',
    center: true,
  })
}
const two_leave = () => {
  console.log('关节2:停止')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x02'
  a_eig.value = '0x00'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}

  ElMessage({
    message: '关节2:停止',
    type: 'warning',
    duration: '1200',
    center: true,
  })
}
const three_left = () => {
  console.log('关节3:正转')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x03'
  a_eig.value = '0x01'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}


  ElMessage({
    message: '关节3:正转',
    type: 'success',
    duration: '1200',
    center: true,
  })
}
const three_right = () => {
  console.log('关节3:反转')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x03'
  a_eig.value = '0x02'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}

  ElMessage({
    message: '关节3:反转',
    type: 'success',
    duration: '1200',
    center: true,
  })
}
const three_leave = () => {
  console.log('关节3:停止')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x03'
  a_eig.value = '0x00'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}

  ElMessage({
    message: '关节3:停止',
    type: 'warning',
    duration: '1200',
    center: true,
  })
}
const four_left = () => {
  console.log('关节4:正转')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x03'
  a_eig.value = '0x01'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}


  ElMessage({
    message: '关节4:正转',
    type: 'success',
    duration: '1200',
  })
}
const four_right = () => {
  console.log('关节4:反转')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x03'
  a_eig.value = '0x02'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}


  ElMessage({
    message: '关节4:反转',
    type: 'success',
    duration: '1200',
    center: true,
  })
}
const four_leave = () => {
  console.log('关节4:停止')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x03'
  a_eig.value = '0x00'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}


  ElMessage({
    message: '关节4:停止',
    type: 'warning',
    duration: '1200',
    center: true,
  })
}
const five_left = () => {
  console.log('关节5:正转')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x05'
  a_eig.value = '0x01'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}

  ElMessage({
    message: '关节5:正转',
    type: 'success',
    duration: '1200',
    center: true,
  })
}
const five_right = () => {
  console.log('关节5:反转')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x05'
  a_eig.value = '0x02'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}


  ElMessage({
    message: '关节5:反转',
    type: 'success',
    duration: '1200',
    center: true,
  })
}
const five_leave = () => {
  console.log('关节5:停止')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x05'
  a_eig.value = '0x00'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}

  ElMessage({
    message: '关节5:停止',
    type: 'warning',
    duration: '1200',
    center: true,
  })
}
const six_left = () => {
  console.log('关节6:正转')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x06'
  a_eig.value = '0x01'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}

  ElMessage({
    message: '关节6:正转',
    type: 'success',
    duration: '1200',
    center: true,
  })
}
const six_right = () => {
  console.log('关节6:反转')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x06'
  a_eig.value = '0x02'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}

  ElMessage({
    message: '关节6:反转',
    type: 'success',
    duration: '1200',
    center: true,
  })
}
const six_leave = () => {
  console.log('关节6:停止')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x06'
  a_eig.value = '0x00'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}

  ElMessage({
    message: '关节6:停止',
    type: 'warning',
    duration: '1200',
    center: true,
  })
}
const seven_left = () => {
  console.log('末端工具:正转')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x07'
  a_eig.value = '0x01'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}

  ElMessage({
    message: '末端工具:正转',
    type: 'success',
    duration: '1200',
    center: true,
  })
}
const seven_right = () => {
  console.log('末端工具:反转')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x07'
  a_eig.value = '0x02'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}

  ElMessage({
    message: '末端工具:反转',
    type: 'success',
    duration: '1200',
    center: true,
  })
}
const seven_leave = () => {
  console.log('末端工具:停止')

  let arr = []
  a_six.value = '0x14'
  a_sev.value = '0x07'
  a_eig.value = '0x00'
  a_nine.value = a_five.value ^ a_six.value ^ a_sev.value ^ a_eig.value

  arr.push(a_one.value)//固定
  arr.push(a_two.value)//固定
  arr.push(a_thr.value)//固定
  arr.push(a_four.value)//设备标识
  arr.push(a_five.value)//长度
  arr.push(a_six.value)//命令字
  arr.push(a_sev.value)//数据1
  arr.push(a_eig.value)//数据2
  arr.push(a_nine.value)//校验码
  console.log(arr)
  let str = {"serial":arr}
  socket.emit(str) //{"serial": "指令"}

  ElMessage({
    message: '末端工具:停止',
    type: 'warning',
    duration: '1200',
    center: true,
  })
}
//-----------------------------------------关节指令-----------------------------------------

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
  background: #0b122e;
}

.header {
  width: 100%;
  height: 90px;
  background: url(../images/bg_top.png) center no-repeat;
  text-align: center;
  font-weight: bold;
  font-size: 38px;
  color: #00f6ff;
  line-height: 90px;
  margin: 0 auto;
}

.three-video {
  width: 100%;
  height: 400px;
  display: flex;
  align-content: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
}

.one {
  width: 32%;
  height: 400px;
  background: url(../images/k_1.png) center no-repeat;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.two {
  width: 32%;
  height: 400px;
  background: url(../images/k_1.png) center no-repeat;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.three {
  width: 32%;
  height: 400px;
  background: url(../images/k_1.png) center no-repeat;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.main-control {
  width: 100%;
  height: 500px;
  display: flex;
  align-content: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
}

.r_1 {
  display: flex;
  flex-direction: row;
  //align-items: center;
  //justify-content: center;
}

.left {
  width: 40%;
  height: 410px;
  background: url(../images/bor1_6.png) center no-repeat;
  background-size: auto 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 60px;
    height: 60px;
    margin-left: 14px;
  }

  .row_1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 100px;
    font-weight: bold;
    font-size: 20px;
    color: #00f6ff;
    margin-top: 40px;

    text {
      margin-left: 27px;
      margin-bottom: 5px;
    }

    .row-btn {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }

  .row_2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 50px;
    font-weight: bold;
    font-size: 20px;
    color: #00f6ff;
    margin-top: 40px;

    text {
      margin-left: 13px;
      margin-bottom: 5px;
    }

    .row-btn {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
}

.middle {
  width: 20%;
  height: 400px;
  background: url(../jxb-imgs/keji3.png) center no-repeat;
  background-size: auto 92%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .middle-icons {
    width: 60%;
    height: 60%;
    display: flex;
    flex-direction: column;

    .row-one {
      display: flex;
      flex-direction: row;
      height: 25%;
      //background: #36791a;
      justify-content: space-between;
    }

    .row-two {
      display: flex;
      flex-direction: row;
      height: 50%;
      //background: gray;
      justify-content: space-between;
      margin-top: 30px;
    }

    .row-th {
      display: flex;
      flex-direction: row;
      height: 25%;
      //background: yellowgreen;
      justify-content: space-between;
    }
  }
}

.right {
  width: 40%;
  height: 400px;
  background: url(../jxb-imgs/left-back.png) center no-repeat;
  background-size: auto 200%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.right-main {
  width: 73%;
  height: 75%;
  background: #0b122e;
}

.right_1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  text {
    font-weight: bold;
    font-size: 20px;
    color: #00f6ff;
  }
}

.demo-progress .el-progress--line {
  width: 350px;
}

::v-deep .el-radio__input.is-checked + .el-radio__label {
  color: #00f6ff;
  font-weight: bold !important;
}

/* radio选中后小圆点的颜色 */
::v-deep .el-radio__input.is-checked .el-radio__inner {
  background: #00f6ff !important;
  border-color: #00f6ff !important;
}

.demo-progress {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.demo-progress .el-progress--line {
  width: 350px;
}

.demo-rate-block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
}

.demo-rate-block:last-child {
  border-right: none;
}

.demo-rate-block .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}


</style>