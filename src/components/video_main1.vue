<template>
  <div class="player">
    <video-player
      playsinline
      class="vjs-custom-skin"
      :options="playerOptions"
      customEventName="changed"
      @ready="playerIsReady"
      @changed="playerStateChanged($event)"
    ></video-player>
  </div>
</template>

<script>
import "videojs-flash";
import "videojs-hotkeys";
export default {
  data() {
    return {
      isRTMP: true,
      playerOptions: {
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "rtmp/mp4",
            src: "rtmp://livetv.dhtv.cn:1935/live/peoples",
          },
        ],
        techOrder: ["flash", "html5"],
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      },
    };
  },
  methods: {
    playerStateChanged(playerCurrentState) {
      // eslint-disable-next-line no-console
      console.log("example 5: state changed", playerCurrentState);
    },
    playerIsReady(player) {
      // eslint-disable-next-line no-console
      console.log("example 5 ready!", player);
      player.hotkeys({
        volumeStep: 0.1,
        seekStep: 5,
        enableModifiersForNumbers: false,
        fullscreenKey: function (event, player) {
          // override fullscreen to trigger when pressing the F key or Ctrl+Enter
          return event.which === 70 || (event.ctrlKey && event.which === 13);
        },
      });
    },
  },
};
</script>

