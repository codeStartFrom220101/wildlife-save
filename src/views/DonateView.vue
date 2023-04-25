<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="banner"></div>
  <div class="container py-6">
    <div class="d-flex justify-content-center mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <h2 class="fw-bold border-bottom border-5 pb-2" style="border-color: rgba(240, 156, 30, .5) !important">隨手捐齊來</h2>
    </div>
    <div class="row row-cols-md-2 row-cols-1 g-3 g-md-5 align-items-center">
      <div class="col" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="500" data-aos-duration="1500">
        <img src="@/assets/briana-tozour-YkdPs_iaCQ8-unsplash.jpg" class="w-100 object-fit-cover" alt="">
      </div>
      <div class="col" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="500" data-aos-duration="1500">
        <form class="row g-3 needs-validation" novalidate>
          <!-- 第一部分 -->
          <div class="col-12">
            <h3 class="h5 border-bottom border-3 pb-2" style="border-color: rgba(240, 156, 30, .5) !important">基本資料</h3>
          </div>
          <div class="col-12 col-md-6">
            <div class="position-relative">
              <input type="text" id="donor-name" class="form-control pt-4" v-model="form.donor.name" required>
              <label for="donor-name" class="form-label position-absolute top-50 translate-middle-y" :class="{'active': form.donor.name.split(' ').join('').length > 0 }" style="left: 15px;">姓名：</label>
              <div class="invalid-feedback">
                請輸入姓名
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="position-relative">
              <input type="tel" id="donor-tel" class="form-control pt-4" v-model="form.donor.tel" required>
              <label for="donor-tel" class="form-label position-absolute top-50 translate-middle-y" :class="{'active': form.donor.tel.split(' ').join('').length > 0 }" style="left: 15px;">聯絡電話：</label>
              <div class="invalid-feedback">
                請輸入電話
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="position-relative">
              <input type="email" id="donor-email" class="form-control pt-4" v-model="form.donor.email" required>
              <label for="donor-email" class="form-label position-absolute top-50 translate-middle-y" :class="{'active': form.donor.email.split(' ').join('').length > 0 }" style="left: 15px;">電子郵件：</label>
              <div class="invalid-feedback">
                請輸入電子郵件
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="position-relative mb-2">
              <input type="number" min="1" class="form-control pt-4" v-model="form.donor.money" required>
              <label for="" class="form-label position-absolute top-50 translate-middle-y" :class="{'active': form.donor.money > 0 }" style="left: 15px;">捐款金額(台幣)：</label>
              <div class="invalid-feedback">
                請輸入捐款金額
              </div>
            </div>
          </div>
          <!-- 第二部分 -->
          <div class="col-12">
            <h3 class="h5 border-bottom border-3 pb-2" style="border-color: rgba(240, 156, 30, .5) !important">收據資料</h3>
          </div>
          <div class="col-12">
            <h4 class="h6">是否需要紙本收據：</h4>
            <div class="form-check">
              <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" v-model="form.receipt.needsReceipt" :value="true" @change="receiptChange" required>
              <label class="form-check-label" for="validationFormCheck2">需要收據</label>
            </div>
            <div class="form-check mb-3">
              <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" v-model="form.receipt.needsReceipt" :value="false" @change="receiptChange" required>
              <label class="form-check-label" for="validationFormCheck3">不需要收據</label>
              <div class="invalid-feedback">請勾選此項目</div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="position-relative mb-2">
              <input type="text" id="receipt-title" class="form-control pt-4" v-model="form.receipt.title" :disabled="!form.receipt.needsReceipt" required>
              <label for="receipt-title" class="form-label position-absolute top-50 translate-middle-y" :class="{'active': form.receipt.title.split(' ').join('').length > 0 }" style="left: 15px;">收據抬頭：</label>
              <div class="invalid-feedback">
                請輸入抬頭
              </div>
            </div>
            <div class="form-check mb-3">
              <input type="checkbox" class="form-check-input" id="receipt-title-check"  @change="receiptTitleChecked" :disabled="!form.receipt.needsReceipt">
              <label class="form-check-label" for="receipt-title-check">同真實姓名</label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="position-relative">
              <input type="text" class="form-control pt-4" v-model="form.receipt.id" :disabled="!form.receipt.needsReceipt" required>
              <label for="" class="form-label position-absolute top-50 translate-middle-y" :class="{'active': form.receipt.id.split(' ').join('').length > 0 }" style="left: 15px;">身分證字號：</label>
              <div class="invalid-feedback">
                請輸入身分證字號
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="position-relative">
              <input type="text" class="form-control pt-4" v-model="form.receipt.address" :disabled="!form.receipt.needsReceipt" required>
              <label for="" class="form-label position-absolute top-50 translate-middle-y" :class="{'active': form.receipt.address.split(' ').join('').length > 0 }" style="left: 15px;">收據地址：</label>
              <div class="invalid-feedback">
                請輸入地址
              </div>
            </div>
          </div>
          <div class="col-12">
            <h4 class="h6">個資同意聲明：</h4>
            <div class="overflow-scroll border w-100 mb-2 px-1" style="height: 300px;">
              <p>非常歡迎您光臨「動齊來」（以下簡稱本網站），為了讓您能夠安心使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：</p>
              <p>
                <strong>一、隱私權保護政策的適用範圍</strong><br>
                隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。<br>
                <strong>二、個人資料的蒐集、處理及利用方式</strong><br>
                &nbsp; &nbsp; &nbsp; &nbsp;(一) 當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。<br>
                &nbsp; &nbsp; &nbsp; (二) 您同意本網站在您使用服務信箱、問卷調查等互動性功能時，得保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。但本網站不會蒐集、處理個人資料相關法規不允許蒐集、處理的個人資料。<br>
                &nbsp; &nbsp; &nbsp;(三) 您同意於一般瀏覽時，本網站伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。<br>
                &nbsp; &nbsp; &nbsp;(四) 您同意為提供精確的服務，本網站得將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，本網站得視需要公佈統計數據及說明文字，但不涉及特定個人之資料。<br>
                <strong>三、資料之保護</strong><br>
                &nbsp; &nbsp; &nbsp; 本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。<br>
                <strong>四、網站對外的相關連結</strong><br>
                本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。<br>
                <strong>五、與第三人共用個人資料之政策</strong><br>
                本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。
              </p>

              <p class="mb-0">
                前項但書之情形包括但不限於：<br>
                  1.經由您書面同意。<br>
                  2.法律明文規定。<br>
                  3.為維護國家安全或增進公共利益所必要。<br>
                  4.為免除您生命、身體、自由或財產上之危險。<br>
                  5.為防止他人權益之重大危害。<br>
                  6.與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理後或經蒐集者依其揭露方式無從識別特定之當事人。<br>
                  7.當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。<br>
                  8.有利於您的權益。<br>
                  9.本網站委託廠商協助蒐集、處理或利用您的個人資料。但本網站將對委外廠商或個人善盡監督管理之責。<br>
                  <strong>六、Cookie之使用</strong><br>
                  為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導致網站某些功能無法正常執行 。<br>
                  <strong>七、隱私權保護政策之修正</strong><br>
                  本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。<br>
                  &nbsp;
              </p>
            </div>
            <div class="form-check mb-3">
              <input type="checkbox" class="form-check-input" id="receipt-agree" required>
              <label class="form-check-label" for="receipt-agree">我已閱讀並同意『個資蒐集』於本機構使用</label>
              <div class="invalid-feedback">此項目必須勾選</div>
            </div>
          </div>
          <div class="col-12">
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary" @click="formValidation">確認送出</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-image: url('@/assets/waldemar-slX4Ue9GKpo-unsplash.jpg');
  background-size: cover;
  background-position: 50% 50%;
  height: 560px;
  width: 100%;
}

input ~ label {
  transition: all .3s;
}

input:focus ~ label, label.active{
  font-size: .8rem;
  color: gray;
  top: 5px !important;
  transform: translateY(0) !important;
}

input[type='radio']:focus ~ label, input[type='checkbox']:focus ~ label {
  font-size: 1rem;
  color: black;
}
</style>

<script>
import { mapActions, mapState } from 'pinia'
import donateStore from '@/stores/donateStore'
import statusStore from '@/stores/statusStore'

export default {
  data () {
    return {
      form: {
        donor: {
          name: '',
          email: '',
          tel: '',
          money: ''
        },
        receipt: {
          needsReceipt: true,
          title: '',
          titleChecked: false,
          id: '',
          address: ''
        }
      }
    }
  },
  computed: {
    ...mapState(statusStore, ['isLoading'])
  },
  methods: {
    ...mapActions(donateStore, ['inputDonorData']),
    receiptTitleChecked () {
      this.form.receipt.titleChecked = !this.form.receipt.titleChecked
      this.form.receipt.titleChecked ? this.form.receipt.title = this.form.donor.name : this.form.receipt.title = ''
    },
    formValidation () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            // if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            // }
            form.classList.add('was-validated')
          }, false)
        })
      if (forms[0].checkValidity()) {
        if (!this.form.receipt.needsReceipt) {
          this.form.receipt.title = ''
          this.form.receipt.titleChecked = ''
          this.form.receipt.id = ''
          this.form.receipt.address = ''
        }
        this.inputDonorData(this.form)
        this.form = {
          donor: {
            name: '',
            email: '',
            tel: '',
            money: ''
          },
          receipt: {
            needsReceipt: true,
            title: '',
            titleChecked: false,
            id: '',
            address: ''
          }
        }
      }
    },
    receiptChange () {
      console.log(this.form.receipt.needsReceipt)
      if (!this.form.receipt.needsReceipt) {
        this.form.receipt = {
          needsReceipt: false,
          title: '',
          titleChecked: false,
          id: '',
          address: ''
        }
      }
    }
  }
}
</script>
