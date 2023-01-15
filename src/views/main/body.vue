<script>
import kafukaconfig from '../../assets/kafuka.json'

export default {
  data() {
    return {
      heartRate: kafukaconfig.heartRate,
      highPressure: kafukaconfig.systolicPressure,
      lowPressure: kafukaconfig.diastolicPressure,
      elasticityRi: kafukaconfig.aorticElasticity,
    }
  },
  computed: {
    getheartRateStatus() {
      return kafukaconfig.heartRateStatus == 0 ? '慢' : (kafukaconfig.heartRateStatu == 1 ? '正常' : '快');
    },
    getElasticityStatus() {
      let status = kafukaconfig.arteriolarElasticityStatus;
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
  }
}


</script>
<template>
  <div className="main">
    <div className="header">
      可穿戴生命体征检测平台
    </div>

    <div className="b-main">
      <div className="one">
        <div className="one-top">
        </div>
        <div className="one-bottom">

        </div>
      </div>
      <div className="two">
        <img style="opacity: 1; padding: 0px; height: 100%"
             src="https://static.shanhaibi.com/share/36a1588ea80e0299641d0aeafd5e36a6.png">
      </div>
      <div className="th">
        <div className="th-up">
          <div className="th-up-left">
            <img src="../body-imgs/pressure.png" title="血压"/>
          </div>
          <div className="th-content">
            <div className="yq">收缩压(高压) <span>{{ highPressure }}</span></div>
            <div className="yq">舒张压(低压): <span>{{ lowPressure }}</span></div>
          </div>
        </div>
        <div className="th-middle">
          <div className="th-up-left">
            <img src="../body-imgs/heartRate.png" title="心率"/>
          </div>
          <div className="th-content">
            <div className="yq">心律: <span>{{ heartRate }}</span></div>
            <div className="yq">心律状态: <span>{{ getheartRateStatus }}</span></div>
          </div>
        </div>
        <div className="th-down">
          <div className="th-up-left">
            <img src="../body-imgs/vascular.png" title="血管弹性状态"/>
          </div>
          <div className="th-content">
            <div className="yq">血管弹性数值: <span>{{ heartRate }}</span></div>
            <div className="yq">血管弹性状态: <span>{{ getElasticityStatus }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


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
  height: 90px;
  background: url(../images/bg_top.png) center no-repeat;
  text-align: center;
  font-weight: bold;
  font-size: 38px;
  color: #00f6ff;
  line-height: 90px;
  margin: 0 auto;
}

.b-main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

.one {
  width: 35%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.two {
  width: 30%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
}

.th {
  width: 35%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.one-top {
  width: 100%;
  height: 50%;
  background: url(../body-imgs/tempp.png) center no-repeat;
  background-size: auto 80%;
}

.one-bottom {
  width: 100%;
  height: 50%;
  background: url(../body-imgs/tempp.png) center no-repeat;
  background-size: auto 80%;
}


.th-up {
  width: 100%;
  height: 33%;
  background: url(../body-imgs/one.png) center no-repeat;
  background-size: auto 100%;
}

.th-up-left {
  float: left;
  width: 300px;
  height: 100%
}

.th-up img {
  height: 180px;
  width: 180px;
  margin-top: 60px;
  margin-left: 100px;
}

.th-content {
  margin-left: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.th-middle img {
  height: 200px;
  width: 200px;
  margin-top: 60px;
  margin-left: 120px;
}

.yq {
  height: 50px;
  line-height: 50px;
  font-size: 1.5rem;
  font-family: electronicFont;
  color: #fff;
}

.th-middle {
  width: 100%;
  height: 33%;
  background: url(../body-imgs/two.png) center no-repeat;
  background-size: auto 100%;
}

.th-down {
  width: 100%;
  height: 33%;
  background: url(../body-imgs/th.png) center no-repeat;
  background-size: auto 100%;
}

.th-down img {
  height: 160px;
  width: 160px;
  margin-top: 80px;
  margin-left: 100px;
}
</style>