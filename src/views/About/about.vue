<template>
  <div class="page">
      <div class="about-module-box">
        <div class="about-module-content">
          <h1>DiPRO SCIENCE LAB</h1>
          <h1>迪辅乐微生物免疫代谢实验室</h1>
          <p>Laboratory of Microbiology, Immunology, and Metabolism</p>
          <p>从事人体微生态健康医学解决方案领域的研究，需要拥有自主知识产权的和高级别的微生物实验室作为基础。位于上海的迪辅乐微生物免疫代谢实验室和巴塞罗那的迪辅乐欧洲联合研发中心拥有完善的益生菌菌株基础研究能力和充满创造力的科研团队。超过1000株健康人体来源的原生益生菌菌株库成为迪辅乐微生物免疫代谢实验室开展安全可靠的高效能微生物制剂研发工作的重要基础和安全保障。</p>
          <div class="loaded">登陆实验室</div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
    name: 'About'
}
</script>
<style scoped>
.page{
  height: 100vh;
}
.about-module-box{
  background: url(../../assets/about.jpg) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.about-module-content{
  width: 600px;
  position: absolute;
  top: 250px;
  left: 120px;
  text-align: left;
}
.loaded{
  display: inline-block;
  background: #bd1622;
  padding: 10px 32px;
  color: #ffffff;
}
</style>
