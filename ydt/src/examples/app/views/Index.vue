<template>
    <div class="month6-xxbt">
      <img class="month6-xxbt__title" src="https://caiyunupload.b0.upaiyun.com/ydimg/theme/2018/06/xxbt/app/title.png" alt="">
      <div class="month6-xxbt__block1">
        <img class="month6-xxbt__block1__title" src="https://caiyunupload.b0.upaiyun.com/ydimg/theme/2018/06/xxbt/app/block1_title.png" alt="">
        <p class="month6-xxbt__block1__desc">
          活动期间，用户出借直投项目（新手标除外）单笔出借金额每达到1万元即可获得30元现金奖励。
          出借越多，奖励越多，出借金额不满1万元的部分没有返现
        </p>
        <div class="month6-xxbt__block1__record">
          <div class="record_txt clearfix">
            <span class="record_txt_lf">我的出借记录:</span>
            <span class="t_amount">返现总金额：450元</span>
          </div>
          <div class="no_login_bg hide"></div>
          <div class="no_login hide">
            此内容请<i class="login_btn"></i>后查看
          </div>
          <div class="record_table_wrap ">
            <div class="record_table_wrap_title">
              <table class="record_table">
                <thead class="thead">
                  <tr>
                    <td>单笔出借金额（元）</td>
                    <td>返现金额（元）</td>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="record_table_wrap_content" id="scrol-content">
              <table class="record_table">
                <tbody class="tbody">
                  <tr>
                    <td>10000</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>10000</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>10000</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>10000</td>
                    <td>200</td>
                  </tr>
                  <!-- <tr class="no_data">
                    <td>暂无数据</td>
                  </tr> -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="month6-xxbt__block1__btn">
          <i class="borrow_btn" onclick="borrowe();"></i>
        </div>
      </div>
      <div class="month6-xxbt__block2">
        <i class="ic1"></i>
        <i class="ic2"></i>
        <img class="month6-xxbt__block2__title" src="https://caiyunupload.b0.upaiyun.com/ydimg/theme/2018/06/xxbt/app/block2_title.png" alt="">
        <p class="month6-xxbt__block2__desc">
          活动期间，用户出借直投项目累计出借金额（活动期间出借直投项目金额-活动期间债权转让的金额）达到指定金额，即可获得相应的实物奖励
        </p>
        <div class="amount">
          <img class="title" src="https://caiyunupload.b0.upaiyun.com/ydimg/theme/2018/06/xxbt/app/block2_amount_title.png" alt="">
          <i class="border"></i>
          <div class="total_amount hide">
            <span>923,8384,992</span>
            <i class="border"></i>
          </div>
          <div class="no_login ">
            此内容请<i class="login_btn"></i>后查看
          </div>
        </div>
        <table class="table">
          <tr class="thead">
            <td>累计出借金额（元）</td>
            <td>奖品</td>
          </tr>
          <tr>
            <td><i class="award_ic"></i>50万</td>
            <td>摩飞MR4667意式浓缩咖啡机</td>
          </tr>
          <tr>
            <td><i class="award_ic"></i>100万</td>
            <td>GoProHERO5运动摄像机</td>
          </tr>
          <tr>
            <td><i class="award_ic"></i>300万</td>
            <td>iPhone X 64G</td>
          </tr>
          <tr>
            <td><i class="award_ic"></i>500万</td>
            <td>MacBook Pro 15 英寸 512G</td>
          </tr>
        </table>
        <div class="month6-xxbt__block2__btn">
          <i class="borrow_btn"></i>
        </div>
      </div>
      <div class="month6-xxbt__block3">
        <p class="month6-xxbt__block3__desc">
          1、活动时间：2018年6月14日10:00-2018年7月3日24:00；<br/>
          2、自动投标、手动投标均可参与本活动；<br/>
          3、返现奖金预计将于出借成功后24小时内发放至账户；<br/>
          4、新手标、债权转让项目不计入累计出借金额；<br/>
          5、计算累计出借金额时将扣除债转的金额；<br/>
          6、实物奖励以用户获得的最高奖励为准，每人仅可获得1个；<br/>
          7、实物奖品将于活动后10个工作日内发货，请豆粉及时更新默认收货地址，发奖时间节假日顺延；<br/>
          8、本次活动最终解释权归银豆网所有。
        </p>
      </div>
    </div>
</template>
<script>
export default {
  name: "index",
  mounted() {
      var h = '1.813333rem';  // h = '0.906667rem'; 
      $("#scrol-content").slimScroll({ height: h , alwaysVisible:true});
  },
  data() {
    return {
      showTip: false
    };
  },
  methods: {
    showClick() {
      this.showTip = true;
    }
  }
};
</script>
