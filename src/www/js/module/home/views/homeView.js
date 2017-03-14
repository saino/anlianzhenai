/**
 * Created by saino.liu on 2017/3/7.
 */
define([
    'common/base/base_view',
    'text!module/home/templates/home.html',
    'marionette',
    'module/home/model/homeModel'
],function(BaseView, homeTPL, mn, homeModel) {
    return BaseView.extend({
        id : "home",

        template : _.template(homeTPL),

        //投保须知
        toubaoxuzhi: '<p style="white-space: normal; widows: 1;">1、本产品由安联财产保险(中国)有限公司承保。目前该公司在广州、深圳、佛山、东莞、江门、上海有分支机构。本产品的销售区域为全国。</p><p style="white-space: normal; widows: 1;">2、本产品的承保年龄为出生满30天-60周岁，最高续保年龄为80周岁（含）。被保险人须为投保人本人、其配偶、其父母、其子女。在中国境内工作或居住满183天以上外籍人士可购买。</p><p style="white-space: normal; widows: 1;">3、本产品承保职业类别为1-4类的被保险人。具体职业种类归属详见安联职业分类表。</p><p style="white-space: normal; widows: 1;">4、一般医疗保险金</p><p style="white-space: normal; widows: 1;">1）住院医疗保险金：检查检验费，治疗费，床位费，膳食费，护理费，药品费，重症监护室床位费等；</p><p style="white-space: normal; widows: 1;">2）特殊门诊医疗保险金：门诊肾透析费，器官移植后的门诊抗排异治疗费，门诊恶性肿瘤治疗费，包括化学医疗法，放射疗法，肿瘤免疫疗法，肿瘤内分泌疗法，肿瘤靶向疗法治疗费用；</p><p style="white-space: normal; widows: 1;">共享年度限额100万（标准计划），（扣除免赔额后）100%赔付。</p><p style="white-space: normal; widows: 1;">5、恶性肿瘤医疗保险金</p><p style="white-space: normal; widows: 1;">1）恶性肿瘤住院医疗保险金：检查检验费，治疗费，床位费，膳食费，护理费，药品费，重症监护室床位费等；</p><p style="white-space: normal; widows: 1;">2）恶性肿瘤特殊门诊保险金：化疗，放疗，免疫治疗，内分泌治疗，靶向治疗费用；</p><p style="white-space: normal; widows: 1;">共享额外年度限额100万（标准计划），（扣除免赔额后）100%赔付。</p><p style="white-space: normal; widows: 1;">6、被保险人首次投保或非连续投保时，疾病住院或特殊门诊等待期为30天，详见保险条款。</p><p style="white-space: normal; widows: 1;">7、本保险就诊医院要求：中华人民共和国境内（港、澳、台地区除外）合法经营的二级及二级以上医院，且不包括特需病房、外宾病房等，详见保险条款。</p><p style="white-space: normal; widows: 1;">8、若被保险人以有社会医疗保险身份投保，但未以社会医疗保险身份就诊并结算的，本保险按照应赔付金额的60%进行赔付。</p><p style="white-space: normal; widows: 1;">9、本保险无犹豫期，请您慎重选择购买，除法律法规或双方另有约定外，成功投保之后退保本公司仅退还保单未满期保费，退保将会造成您的损失。</p><p style="white-space: normal; widows: 1;">10、需填写健康问卷，保险合同将增加一页标准版本的客户健康告知确认的内容</p><p style="white-space: normal; widows: 1;">11、续年续交保费，不保证续保费率</p><p style="white-space: normal; widows: 1;">12、被保险人应满足日常居住地在中国大陆境内，即最近一年内在中国大陆境内（不含港澳台）工作或居住满183天的要求。</p><p style="white-space: normal; widows: 1;">13、本商品的具体保障内容，请以正式的保险条款为准，尤其请您认真阅读免责条款。如保单载明与保险条款内容不一致的，以保单载明为准。</p><p style="white-space: normal; widows: 1;">14、本产品受益人默认为法定继承人。</p><p style="white-space: normal; widows: 1;">15、本产品为网上投保、网上支付、网上即时核保，采用电子保单形式承保。保单为中英文互译，可满足使馆对英文保单的要求。可登录安联保险网站或拨打保险公司电话400-800-2020查询、验真。通过快保购买本产品，您可以享受双重服务，如您在购买过程中遇到任何问题，或后续保全变更、退保与理赔事务均可拨打客服热线400-818-9191协助您办理。</p><p style="white-space: normal; widows: 1;">16、您在购买产品过程中，如发现本公司有关人员有违法、违规行为，或认为自身权益受到侵犯，请您保留相关证据并向本公司投诉，投诉电话：400-818-9191。</p><p><span style="color: rgb(255, 0, 0);">17、本产品提供电子发票，投保成功后保险公司将以短信和邮件的方式发送，可自行点击链接进行下载，发票链接有效期为7天。</span></p><p style="white-space: normal; widows: 1;">&nbsp;</p><p><br></p>',
        //条款资料
        tiaokuanziliao: '<p style="white-space: normal; widows: 1;">安联财产保险（中国）有限公司</p><p style="white-space: normal; widows: 1;">个人人身意外伤害保险条款（2016版)</p><p style="white-space: normal; widows: 1;">1.总则</p><p style="white-space: normal; widows: 1;">本保险合同由保险条款、投保单、保险单、保险凭证以及批单等组成。凡涉及本保险合同的约定，均应釆用书面形式。</p><p style="white-space: normal; widows: 1;">身体健康的自然人，可作为本保险合同的被保险人。是否接受投保、承保，由保险人决定。</p><p style="white-space: normal; widows: 1;">被保险人本人、对被保险人有保险利益的其他人可作为投保人。后者作为投保人投保时必须经被保险人书面同意。本保险合同的受益人包括：</p><p style="white-space: normal; widows: 1;">一、身故保险金受益人</p><p style="white-space: normal; widows: 1;">订立本保险合同时，被保险人或投保人可指定一人或数人为身故保险金受益人。身故保险金受益人为数人时，应确定其受益顺序和受益份额；未确定受益份额的，各身故保险金受益人按照相等份额享有受益权。投保人指定受益人时须经被保险人同意，投保人为与其有劳动关系的劳动者投保人身保险，不得指定被保险人及其近亲属以外的人为受益人。</p><p style="white-space: normal; widows: 1;">被保险人死亡后，有下列情形之一的，保险金作为被保险人的遗产，由保险人依照《中华人民共和国继承法》的规定履行给付保险金的义务：</p><p style="white-space: normal; widows: 1;">1)没有指定受益人，或者受益人指定不明无法确定的；</p><p style="white-space: normal; widows: 1;">2)受益人先于被保险人死亡，没有其他受益人的；</p><p style="white-space: normal; widows: 1;">3)受益人依法丧失受益权或者放弃受益权，没有其他受益人的。</p><p style="white-space: normal; widows: 1;">受益人与被保险人在同一事件中死亡，且不能确定死亡先后顺序的，推定受益人死亡在先。</p><p style="white-space: normal; widows: 1;">被保险人或投保人可以变更身故保险金受益人，但需书面通知保险人，由保险人在本保险合同上批注。对因身故保险金受益人变更发生的法律纠纷，保险人不承担任何责任。</p><p style="white-space: normal; widows: 1;">投保人指定或变更身故保险金受益人的，应经被保险人书面同意。被保险人为无民事行为能力人或限制民事行为能力人的，应由其监护人指定或变更身故保险金受益人。</p><p style="white-space: normal; widows: 1;">二、伤残保险金受益人</p><p style="white-space: normal; widows: 1;">除另有约定外，本保险合同的伤残保险金的受益人为被保险人本人。</p><p style="white-space: normal; widows: 1;">2.保险责任</p><p style="white-space: normal; widows: 1;">在保险期间内，被保险人因遭受意外伤害事故导致身故、伤残的，保险人依照下列约定给付保险金，且给付各项保险金之和不超过保险金额。</p><p style="white-space: normal; widows: 1;">一、身故保险责任</p><p style="white-space: normal; widows: 1;">在保险期间内，被保险人遭受意外伤害事故，并自事故发生之日起180日内因该事故身故的，保险人按保险金额给付身故保险金，对该被保险人的保险责任终止。</p><p style="white-space: normal; widows: 1;">被保险人因遭受意外伤害事故且自该事故发生日起下落不明，后经人民法院依法宣告死亡的，保险人按保险金额给付身故保险金。但若被保险人被宣告死亡后生还的，保险金受领人应于知道或应当知道被保险人生还后30日内退还保险人给付的身故保险金。</p><p style="white-space: normal; widows: 1;">被保险人身故前已领有本条第（二)款保险金的，身故保险金为扣除已给付保险金后的余额（如有)。</p><p style="white-space: normal; widows: 1;">二、伤残保险责任</p><p style="white-space: normal; widows: 1;">在保险期间内，被保险人遭受意外伤害事故，并自该事故发生之日起180日内因该事故造成本保险合同所附《人身保险伤残评定标准（行业标准)》（简称《伤残评定标准》）所列伤残之一的，保险人按该表所列给付比例乘以意外伤害保险金额给付伤残保险金。如第180日治疗仍未结束的，按当日的身体情况进行伤残鉴定，并据此给付伤残保险金。</p><p style="white-space: normal; widows: 1;">1)当同一保险事故造成两处或两处以上伤残时，应首先对各处伤残程度分别进行评定，如果几处伤残等级不同，以最重的伤残等级作为最终的评定结论；如果两处或两处以上伤残等级相同，伤残等级在原评定基础上最多晋升一级，最高晋升至第一级。同一部位和性质的伤残，不应釆用《伤残评定标准》条文两条以上或者同一条文两次以上进行评定。</p><p style="white-space: normal; widows: 1;">2)被保险人如在本次意外伤害事故之前已有伤残，保险人按合并后的伤残程度在《伤残评定标准》中所对应的给付比例给付伤残保险金，但应扣除原有伤残程度在《伤残评定标准》所对应的伤残保险金。</p><p style="white-space: normal; widows: 1;">在保险期间内，前述第（一）、（二）款下的保险金累计给付金额以保险单载明的意外伤害保险金额为限。</p><p style="white-space: normal; widows: 1;">3.责任免除</p><p style="white-space: normal; widows: 1;">因下列任一情形造成被保险人任何损失的，或具备下列任一情形的，保险人不承担给付保险金责任：</p><p style="white-space: normal; widows: 1;">1)投保人或被保险人的故意行为；</p><p style="white-space: normal; widows: 1;">2)被保险人自致伤害或自杀，但被保险人自杀时为无民事行为能力人的除外；</p><p style="white-space: normal; widows: 1;">3)因被保险人挑衅或故意行为而导致的打斗、被袭击或被谋杀；</p><p style="white-space: normal; widows: 1;">4)被保险人妊娠、流产、分娩、不孕不育；</p><p style="white-space: normal; widows: 1;">5)被保险人疾病、食物中毒、药物过敏、中暑、猝死；</p><p style="white-space: normal; widows: 1;">6)被保险人未遵医嘱，私自服用、涂用、注射药物；</p><p style="white-space: normal; widows: 1;">7)任何生物、化学、原子能武器，原子能或核能装置所造成的爆炸、灼伤、污染或辐射；</p><p style="white-space: normal; widows: 1;">8)保单生效前已存在的受伤及其并发症；</p><p style="white-space: normal; widows: 1;">9)细菌或病毒感染（但因意外伤害致有伤口而发生感染者除外）；</p><p style="white-space: normal; widows: 1;">10)被保险人任何因整容、整形手术、内外科手术或其他医疗行为导致的伤害;</p><p style="white-space: normal; widows: 1;">11)战争、军事行动、暴动或武装叛乱期间；</p><p style="white-space: normal; widows: 1;">12)被保险人从事违法、犯罪活动期间或被依法拘留、服刑、在逃期间；</p><p style="white-space: normal; widows: 1;">13)被保险人在酒精或毒品、管制药物的影响期间；</p><p style="white-space: normal; widows: 1;">14)被保险人酒后驾驶、无有效驾驶证驾驶或驾驶无有效行驶证的机动车期间；</p><p style="white-space: normal; widows: 1;">15)发生被保险人作为军人(含特种兵)、警务人员(含防暴警察)在训练或执行公务期间；</p><p style="white-space: normal; widows: 1;">16)被保险人参与任何职业体育活动或任何设有奖金或报酬的体育运动；</p><p style="white-space: normal; widows: 1;">17)被保险人进行滑翔翼、滑翔伞、跳伞、探险活动（见释义）、非固定路线洞穴探险、特技表演（见释义），任何海拔6,000米以上的户外运动及潜水深度大于18米的活动期间。如保险人进行风险评估后同意拓展承保时，不受本责任免除的限制；</p><p style="white-space: normal; widows: 1;">18)被保险人必须借助登山绳索、登山向导(非旅行社导游)完成的登山活动期间；借助水下供气瓶（非呼吸管）设备完成的潜水活动期间（但除外在旅游景点的专业潜水教练指导下进行的休闲潜水活动）；</p><p style="white-space: normal; widows: 1;">19)被保险人存在精神和行为障碍（以世界卫生组织颁布的《疾病和有关健康问题的国际统计分类（ICD-10）》为准）期间；</p><p style="white-space: normal; widows: 1;">20)被保险人从事采矿业、地下作业、山洞作业、水上作业、5米以上高处作业的职业活动期间；</p><p style="white-space: normal; widows: 1;">21)航空或飞行活动，包括身为飞行驾驶员或空勤人员，但以缴费乘客身份乘坐客运民航班机或参与飞行活动的除外。</p><p style="white-space: normal; widows: 1;">4.保险金额和保险费</p><p style="white-space: normal; widows: 1;">保险金额是保险人承担给付保险金责任的最高限额。保险金额由投保人、保险人双方约定，并在保险单中载明。</p><p style="white-space: normal; widows: 1;">投保人应该按照合同约定向保险人交纳保险费。</p><p style="white-space: normal; widows: 1;">5.保险期间</p><p style="white-space: normal; widows: 1;">除另有约定外，保险期间为一年，以保险单载明的起讫时间为准。</p><p style="white-space: normal; widows: 1;">6.保险人义务</p><p style="white-space: normal; widows: 1;">订立保险合同时，釆用保险人提供的格式条款的，保险人向投保人提供的投保单应当附格式条款，保险人应当向投保人说明保险合同的内容。对保险合同中免除保险人责任的条款，保险人在订立合同时应当在投保单、保险单或者其他保险凭证上作出足以引起投保人注意的提示，并对该条款的内容以书面或者口头形式向投保人作出明确说明；未作提示或者明确说明的，该条款不产生效力。</p><p style="white-space: normal; widows: 1;">本保险合同成立后，保险人应当及时向投保人签发保险单或其他保险凭证。</p><p style="white-space: normal; widows: 1;">保险人认为被保险人提供的有关索赔的证明和资料不完整的，应当及时一次性通知投保人、被保险人补充提供。保险人收到被保险人的给付保险金的请求后，应当及时作出是否属于保险责任的核定；情形复杂的，应当在三十曰内作出核定，但保险合同另有约定的除外。</p><p style="white-space: normal; widows: 1;">保险人应当将核定结果通知被保险人；对属于保险责任的，在与被保险人达成给付保险金的协议后十日内，履行赔偿保险金义务。保险人依照前款约定作出核定后，对不属于保险责任的，应当自作出核定之曰起三曰内向被保险人发出拒绝给付保险金通知书，并说明理由。</p><p style="white-space: normal; widows: 1;">保险人自收到给付保险金的请求和有关证明、资料之日起六十日内，对其给付的数额不能确定的，应当根据已有证明和资料可以确定的数额先予支付；保险人最终确定给付的数额后，应当支付相应的差额。</p><p style="white-space: normal; widows: 1;">7.投保人、被保险人义务</p><p style="white-space: normal; widows: 1;">除另有约定外，投保人应当在保险合同成立时交清保险费。</p><p style="white-space: normal; widows: 1;">订立保险合同，保险人就保险标的或者被保险人的有关情况提出询问的，投保人应当如实告知。</p><p style="white-space: normal; widows: 1;">投保人故意或者因重大过失未履行前款规定的义务，足以影响保险人决定是否同意承保或者提高保险费率的，保险人有权解除本合同。</p><p style="white-space: normal; widows: 1;">前款规定的合同解除权，自保险人知道有解除事由之日起，超过三十日不行使而消灭。自合同成立之日起超过二年的，保险人不得解除合同；发生保险事故的，保险人应当承担给付保险金责任。</p><p style="white-space: normal; widows: 1;">投保人故意不履行如实告知义务的，保险人对于合同解除前发生的保险事故，不承担给付保险金责任，并不退还保险费。</p><p style="white-space: normal; widows: 1;">投保人因重大过失未履行如实告知义务，对保险事故的发生有严重影响的，保险人对于合同解除前发生的保险事故，不承担给付保险金责任，但应当退还保险费。</p><p style="white-space: normal; widows: 1;">保险人在合同订立时已经知道投保人未如实告知的情况的，保险人不得解除合同；发生保险事故的，保险人应当承担给付保险金责任。</p><p style="white-space: normal; widows: 1;">被保险人变更职业或工种时，投保人或被保险人应在10日内以书面形式通知保险人。</p><p style="white-space: normal; widows: 1;">被保险人所变更的职业或工种依照保险人职业分类在拒保范围内或保险人不愿承保变更后的风险的，保险人在接到通知后有权解除本保险合同并按照接到通知之日退还原职业或工种所对应的未满期净保费。被保险人所变更的?</p><p style="white-space: normal; widows: 1;">职业或工种依照保险人职业分类仍可承保的或在拒保范围内但保险人认定可以继续承保的，保险人按照接到通知之曰计算并退还原职业或工种所对应的未满期净保费，投保人补交按照保险人接到通知之曰计算的新职业或工种所对应的未满期净保费。</p><p style="white-space: normal; widows: 1;">被保险人变更职业或工种，未依本条约定通知保险人，因危险程度增加导致发生保险事故的，保险人不承担给付保险金的责任。</p><p style="white-space: normal; widows: 1;">投保人住所或通讯地址变更时，应及时以书面形式通知保险人。投保人未通知的，保险人按本保险合同所载的最后住所或通讯地址发送的有关通知，均视为已送达投保人。</p><p style="white-space: normal; widows: 1;">投保人、被保险人或者保险金受益人知道保险事故发生后，应当及时通知保险人。故意或者因重大过失未及时通知，致使保险事故的性质、原因、损失程度等难以确定的，保险人对无法确定的部分，不承担给付保险金责任，</p><p style="white-space: normal; widows: 1;">但保险人通过其他途径已经及时知道或者应当及时知道保险事故发生的除外。</p><p style="white-space: normal; widows: 1;">上述约定，不包括因不可抗力而导致的迟延。</p><p style="white-space: normal; widows: 1;">8.保险金申请</p><p style="white-space: normal; widows: 1;">保险金申请人向保险人申请给付保险金时，应提交以下材料。保险金申请人因特殊原因不能提供以下材料的，应提供其他合法有效的材料。保险金申请人未能提供有关材料，导致保险人无法核实该申请的真实性的，保险人对无法核实部分不承担给付保险金的责任。</p><p style="white-space: normal; widows: 1;">一、身故保险金申请</p><p style="white-space: normal; widows: 1;">1)索赔申请表</p><p style="white-space: normal; widows: 1;">2)保险单原件；</p><p style="white-space: normal; widows: 1;">3)身故保险金受益人/法定继承人的身份证明及其他相关材料；</p><p style="white-space: normal; widows: 1;">4)二级以上（含二级）医疗机构或保险人认可的机构出具的被保险人身故证明书。若被保险人为宣告死亡，保险金申请人应提供人民法院出具的宣告死亡证明文件；</p><p style="white-space: normal; widows: 1;">5)被保险人的户籍注销证明；</p><p style="white-space: normal; widows: 1;">6)保险金申请人所能提供的与确认保险事故的性质、原因、损失程度等有关的其他证明和资料；</p><p style="white-space: normal; widows: 1;">7)保险金申请人所能提供的其他与本项申请相关的材料。</p><p style="white-space: normal; widows: 1;">二、伤残保险金申请</p><p style="white-space: normal; widows: 1;">1)索赔申请表；</p><p style="white-space: normal; widows: 1;">2)保险单原件；</p><p style="white-space: normal; widows: 1;">3)被保险人身份证明；</p><p style="white-space: normal; widows: 1;">4)二级以上（含二级）或保险人认可的医疗机构或司法鉴定机构出具的伤残鉴定诊断书；</p><p style="white-space: normal; widows: 1;">5)保险金申请人所能提供的其他与本项申请相关的材料；</p><p style="white-space: normal; widows: 1;">6)若保险金申请人委托他人申请的，还应提供授权委托书原件、委托人和受托人的身份证明等相关证明文件。</p><p style="white-space: normal; widows: 1;">保险金申请人向保险人请求给付保险金的诉讼时效期间为二年，自其知道或者应当知道保险事故发生之日起计算。</p><p style="white-space: normal; widows: 1;">9.争议处理和法律适用</p><p style="white-space: normal; widows: 1;">因履行本保险合同发生的争议，由当事人协商解决。协商不成的，提交保险单载明的仲裁机构仲裁；保险单未载明仲裁机构或者争议发生后未达成仲裁协议的，依法向人民法院起诉。</p><p style="white-space: normal; widows: 1;">与本保险合同有关的以及履行本保险合同产生的一切争议处理适用中华人民共和国法律（不包括港澳台地区法律)。</p><p style="white-space: normal; widows: 1;">10.其他事项</p><p style="white-space: normal; widows: 1;">在本保险合同成立后，投保人可以书面形式通知保险人解除合同，但保险人已根据本保险合同约定给付保险金的除外。</p><p style="white-space: normal; widows: 1;">投保人解除本保险合同时，应提供下列证明文件和资料：</p><p style="white-space: normal; widows: 1;">1)保险合同解除申请书；</p><p style="white-space: normal; widows: 1;">2)保险单原件；</p><p style="white-space: normal; widows: 1;">3)保险费交付凭证；</p><p style="white-space: normal; widows: 1;">4)投保人身份证明。</p><p style="white-space: normal; widows: 1;">投保人要求解除本保险合同，自保险人接到保险合同解除申请书之时起，本保险合同的效力终止。保险人收到上述证明文件和资料之日起30日内退还保险单的未满期净保费。</p><p style="white-space: normal; widows: 1;">11.释义</p><p style="white-space: normal; widows: 1;">11.1 周岁</p><p style="white-space: normal; widows: 1;">以法定身份证明文件中记载的出生日期为基础计算的实足年龄。</p><p style="white-space: normal; widows: 1;">11.2 保险人</p><p style="white-space: normal; widows: 1;">指与投保人签订本保险合同的安联财产保险（中国）有限公司及其分支机构。</p><p style="white-space: normal; widows: 1;">11.3 意外伤害</p><p style="white-space: normal; widows: 1;">指以外来的、突发的、非本意的和非疾病的客观事件为直接且单独的原因致使身体受到的伤害。</p><p style="white-space: normal; widows: 1;">11.4 肢</p><p style="white-space: normal; widows: 1;">指人体的四肢，即左上肢、右上肢、左下肢和右下肢。</p><p style="white-space: normal; widows: 1;">11.5猝死</p><p style="white-space: normal; widows: 1;">外表看似健康的人由于潜在的疾病或者功能障碍所引起的突然的出乎意料的死亡，且医疗机构出具的被保险人死亡诊断为猝死。</p><p style="white-space: normal; widows: 1;">11.6 战争</p><p style="white-space: normal; widows: 1;">是指不管宣战与否，主权国家为达到其经济，疆域的扩张，民族主义，种族，宗教或其他目的而进行的任何战争或军事行动。</p><p style="white-space: normal; widows: 1;">11.7 酒后驾驶</p><p style="white-space: normal; widows: 1;">指经检测或鉴定，发生事故时车辆驾驶人员每百毫升血液中的酒精含量达到或超过一定的标准，被公安机关交通管理部门依法认定为饮酒后驾驶或醉酒后驾驶。</p><p style="white-space: normal; widows: 1;">11.8 无有效驾驶证</p><p style="white-space: normal; widows: 1;">被保险人存在下列情形之一者：</p><p style="white-space: normal; widows: 1;">1）无驾驶证或驾驶证有效期已届满；</p><p style="white-space: normal; widows: 1;">2）驾驶的机动车与驾驶证载明的准驾车型不符；</p><p style="white-space: normal; widows: 1;">3）实习期内驾驶公共汽车、营运客车或者载有爆炸物品、易燃易爆化学物品、剧毒或者放射性等危险物品的机动车，实习期内驾驶的机动车牵引挂车；</p><p style="white-space: normal; widows: 1;">4）持未按规定审验的驾驶证，以及在暂扣、扣留、吊销、注销驾驶证期间驾驶机动车；</p><p style="white-space: normal; widows: 1;">5）使用各种专用机械车、特种车的人员无国家有关部门核发的有效操作证，驾驶营业性客车的驾驶人无国家有关部门核发的有效资格证书；</p><p style="white-space: normal; widows: 1;">6）依照法律法规或公安机关交通管理部门有关规定不允许驾驶机动车的其他情况下驾车。</p><p style="white-space: normal; widows: 1;">11.9 无有效行驶证</p><p style="white-space: normal; widows: 1;">指下列情形之一：</p><p style="white-space: normal; widows: 1;">1）机动车被依法注销登记的；</p><p style="white-space: normal; widows: 1;">2）无公安机关交通管理部门核发的行驶证、号牌，或临时号牌或临时移动证的机动交通工具；</p><p style="white-space: normal; widows: 1;">3）未在规定检验期限内进行机动车安全技术检验或检验未通过的机动交通工具；（4）依照法律法规或公安机关交通管理部门有关规定不允许机动车行驶的其他情况。</p><p style="white-space: normal; widows: 1;">11.10 未满期净保费</p><p style="white-space: normal; widows: 1;">未满期净保费=保险费×[1-(保险单已经过天数/保险期间天数)] ×（1-25%）。经过天数不足一天的按一天计算。</p><p style="white-space: normal; widows: 1;">11.11 保险金申请人</p><p style="white-space: normal; widows: 1;">指被保险人；被保险人身故时，指受益人或被保险人的继承人或依法享有保险金请求权的其他自然人。</p><p style="white-space: normal; widows: 1;">11.12 不可抗力</p><p style="white-space: normal; widows: 1;">指不能预见、不能避免并不能克服的客观情况。</p><p style="white-space: normal; widows: 1;">11.13 医疗机构</p><p style="white-space: normal; widows: 1;">在中国境内（不包括香港、澳门、台湾地区）的医疗机构是指合法的二级或二级以上医院或投保人与保险人协商共同指定的医院或医疗机构。</p><p style="white-space: normal; widows: 1;">在中国境外（包括香港、澳门、台湾地区）的医疗机构是指保险人认可的，根据所在国家法律合法成立、运营并符合以下标准的医疗机构：</p><p style="white-space: normal; widows: 1;">1）主要运营目的是以住院病人形式提供接待患病、伤者并为其提供医疗护理和治疗，</p><p style="white-space: normal; widows: 1;">2）在一名或若干医生的指导下为病人治疗，其中最少有一名合法执业资格的驻院医生驻诊，</p><p style="white-space: normal; widows: 1;">3）维持足够妥善的设备为病人提供医学诊断和治疗，并于机构内或由其管理的地方提供进行各种手术的设备，</p><p style="white-space: normal; widows: 1;">4）有合法执业的护士提供和指导二十四小时的全职护理服务。</p><p style="white-space: normal; widows: 1;">5）本附加条款中所指医疗机构不包括以下或类似的医疗机构：</p><p style="white-space: normal; widows: 1;">5.1）精神病院；</p><p style="white-space: normal; widows: 1;">5.2）老人院、疗养院、戒毒中心和戒酒中心；</p><p style="white-space: normal; widows: 1;">5.3）健康中心或天然治疗所、疗养或康复院。</p><p style="white-space: normal; widows: 1;">11.14 特技</p><p style="white-space: normal; widows: 1;">指马术、杂技、驯兽等特殊技能。</p><p style="white-space: normal; widows: 1;">11.15 探险活动</p><p style="white-space: normal; widows: 1;">指明知在某种特定的自然条件下有失去生命或使身体受到伤害的危险，而故意使自己置身其中的行为。如极地探</p><p style="white-space: normal; widows: 1;">险、江河漂流、徒步穿越沙漠或人迹罕见的原始森林等活动。</p><p style="white-space: normal; widows: 1;"><br></p><p style="white-space: normal; widows: 1;"><br></p><p style="white-space: normal; widows: 1;">人身保险伤残评定标准</p><p style="white-space: normal; widows: 1;">中国保险行业协会、中国法医学会联合发布</p><p style="white-space: normal; widows: 1;">二零一三年六月八日</p><p style="white-space: normal; widows: 1;">前言</p><p style="white-space: normal; widows: 1;">人身保险伤残评定标准（行业标准）</p><p style="white-space: normal; widows: 1;">1神经系统的结构和精神功能1.1脑膜的结构损伤1.2脑的结构损伤，智力功能障碍</p><p style="white-space: normal; widows: 1;">1.3意识功能障碍</p><p style="white-space: normal; widows: 1;">2眼，耳和有关的结构和功能</p><p style="white-space: normal; widows: 1;">2.1眼球损伤或视功能障碍2.2视功能障碍</p><p style="white-space: normal; widows: 1;">2.3眼球的晶状体结构损伤2.4眼睑结构损伤</p><p style="white-space: normal; widows: 1;">2.5耳廓结构损伤或听功能障碍2.6听功能障碍</p><p style="white-space: normal; widows: 1;">3发声和言语的结构和功能</p><p style="white-space: normal; widows: 1;">3.1鼻的结构损伤</p><p style="white-space: normal; widows: 1;">3.2口腔的结构损伤</p><p style="white-space: normal; widows: 1;">3.3发声和言语的功能障碍4心血管，免疫和呼吸系统的结构和功能</p><p style="white-space: normal; widows: 1;">4.1心脏的结构损伤或功能障碍4.2脾结构损伤</p><p style="white-space: normal; widows: 1;">4.3肺的结构损伤</p><p style="white-space: normal; widows: 1;">4.4胸廓的结构损伤</p><p style="white-space: normal; widows: 1;">5消化、代谢和内分泌系统有关的结构和功能</p><p style="white-space: normal; widows: 1;">5.1咀嚼和吞咽功能障碍5.2肠的结构损伤</p><p style="white-space: normal; widows: 1;">5.3胃结构损伤</p><p style="white-space: normal; widows: 1;">5.4胰结构损伤或代谢功能障碍</p><p style="white-space: normal; widows: 1;">5.5肝结构损伤</p><p style="white-space: normal; widows: 1;">6泌尿和生殖系统有关的结构和功能</p><p style="white-space: normal; widows: 1;">6.1泌尿系统的结构损伤</p><p style="white-space: normal; widows: 1;">6.2生殖系统的结构损伤</p><p style="white-space: normal; widows: 1;">7神经肌肉骨骼和运动有关的结构和功能</p><p style="white-space: normal; widows: 1;">7.1头颈部的结构损伤</p><p style="white-space: normal; widows: 1;">7.2头颈部关节功能障碍</p><p style="white-space: normal; widows: 1;">7.3上肢的结构损伤，手功能或关节功能障碍</p><p style="white-space: normal; widows: 1;">7.4骨盆部的结构损伤</p><p style="white-space: normal; widows: 1;">7.5下肢的结构损伤，足功能或关节功能障碍</p><p style="white-space: normal; widows: 1;">7.6四肢的结构损伤，肢体功能或关节功能障碍</p><p style="white-space: normal; widows: 1;">7.7脊柱结构损伤和关节活动功能障碍7.8肌肉力量功能障碍</p><p style="white-space: normal; widows: 1;">8皮肤和有关的结构和功能</p><p style="white-space: normal; widows: 1;">8.1头颈部皮肤结构损伤和修复功能障碍</p><p style="white-space: normal; widows: 1;">8.2各部位皮肤结构损伤和修复功能障碍</p><p style="white-space: normal; widows: 1;">前言</p><p style="white-space: normal; widows: 1;">根据保险行业业务发展要求，制订本标准。</p><p style="white-space: normal; widows: 1;">本标准制定过程中参照世界卫生组织《国际功能、残疾和健康分类》（以下简称“ICF”)的理论与方法，建立新的残疾标准的理论架构、术语体系和分类方法。</p><p style="white-space: normal; widows: 1;">本标准制定过程中参考了国内重要的伤残评定标准，如《劳动能力鉴定，职工工伤与职业病致残等级》、《道路交通事故受伤人员伤残评定》等，符合国内相关的残疾政策，同时参考了国际上其他国家地区的伤残分级原则和标准。</p><p style="white-space: normal; widows: 1;">本标准建立了保险行业人身保险伤残评定和保险金给付比例的基础，各保险公司应根据自身的业务特点，根据本标准的方法、内容和结构，开发保险产品，提供保险服务。</p><p style="white-space: normal; widows: 1;">本标准负责起草单位：中国保险行业协会。</p><p style="white-space: normal; widows: 1;">本标准规定了人身保险伤残程度的评定等级以及保险金给付比例的原则和方法，人身保险伤残程度分为一至十级，保险金给付比例分为100%至10?/?。</p><p style="white-space: normal; widows: 1;">1适用范围</p><p style="white-space: normal; widows: 1;">本标准适用于意外险产品或包括意外责任的保险产品中的伤残保障，用于评定由于意外伤害因素引起的伤残程度。</p><p style="white-space: normal; widows: 1;">2术语和定义</p><p style="white-space: normal; widows: 1;">下列术语和定义适用于本标准。</p><p style="white-space: normal; widows: 1;">2.1伤残：因意外伤害损伤所致的人体残疾。</p><p style="white-space: normal; widows: 1;">2.2身体结构：指身体的解剖部位，如器官、肢体及其组成部分。</p><p style="white-space: normal; widows: 1;">2.3身体功能：指身体各系统的生理功能。</p><p style="white-space: normal; widows: 1;">3标准的内容和结构</p><p style="white-space: normal; widows: 1;">本标准参照ICF有关功能和残疾的分类理论与方法，建立“神经系统的结构和精神功能”“眼，耳和有关的结构和功能”“发声和言语的结构和功能”“心血管，免疫和呼吸系统的结构和功能”“消化、代谢和内分泌系统有关的结构和功能”“泌尿和生殖系统有关的结构和功能”“神经肌肉骨骼和运动有关的结构和功能”和“皮肤和有关的结构和功能”8大类，共281项人身保险伤残条目。</p><p style="white-space: normal; widows: 1;">本标准对功能和残疾进行了分类和分级，将人身保险伤残程度划分为一至十级，最重为第一级，最轻为第十级。</p><p style="white-space: normal; widows: 1;">与人身保险伤残程度等级相对应的保险金给付比例分为十档，伤残程度第一级对应的保险金给付比例为100%，伤残程度第十级对应的保险金给付比例为10?/?，每级相差10?/?。</p><p style="white-space: normal; widows: 1;">4伤残的评定原则</p><p style="white-space: normal; widows: 1;">4.1确定伤残类别：评定伤残时，应根据人体的身体结构与功能损伤情况确定所涉及的伤残类别。</p><p style="white-space: normal; widows: 1;">4.2确定伤残等级：应根据伤残情况，在同类别伤残下，确定伤残等级。</p><p style="white-space: normal; widows: 1;">4.3确定保险金给付比例：应根据伤残等级对应的百分比，确定保险金给付比例。</p><p style="white-space: normal; widows: 1;">4.4多处伤残的评定原则：当同一保险事故造成两处或两处以上伤残时，应首先对各处伤残程度分别进行评定，如果几处伤残等级不同，以最重的伤残等级作为最终的评定结论；如果两处或两处以上伤残等级相同，伤残等级在原评定基础上最多晋升一级，最高晋升至第一级。同一部位和性质的伤残，不应釆用本标准条文两条以上或者同一条文两次以上进行评定。</p><p style="white-space: normal; widows: 1;">5说明</p><p style="white-space: normal; widows: 1;">本标准中“以上”均包括本数值或本部位。</p><p style="white-space: normal; widows: 1;">人身保险伤残评定标准（行业标准）</p><p style="white-space: normal; widows: 1;">说明：本标准对功能和残疾进行了分类和分级，将人身保险伤残程度划分为一至十级，最重为第一级，最轻为第十级。与人身保险伤残程度等级相对应的保险金给付比例分为十档，伤残程度第一级对应的保险金给付比例为100%，伤残程度第十级对应的保险金给付比例为10%，每级相差10%。</p><p style="white-space: normal; widows: 1;">1神经系统的结构和精神功能</p><p style="white-space: normal; widows: 1;">1.1脑膜的结构损伤</p><p style="white-space: normal; widows: 1;">1.2脑的结构损伤，智力功能障碍</p><p style="white-space: normal; widows: 1;">颅脑损伤导致极度智力缺损（智商小于等于20)，日常生活完全不能自理，处于完全护理依赖状态   1级</p><p style="white-space: normal; widows: 1;">颅脑损伤导致重度智力缺损（智商小于等于34)，日常生活需随时有人帮助才能完成，处于完全护理依赖状态  2级</p><p style="white-space: normal; widows: 1;">颅脑损伤导致重度智力缺损（智商小于等于34)，不能完全独立生活，需经常有人监护，处于大部分护理依赖状态    3级</p><p style="white-space: normal; widows: 1;">颅脑损伤导致中度智力缺损（智商小于等于49)，日常生活能力严重受限，间或需要帮助，处于大部分护理依赖状态   4级</p><p style="white-space: normal; widows: 1;"><br></p><p style="white-space: normal; widows: 1;">注：①护理依赖：应用“基本日常生活活动能力”的丧失程度来判断护理依赖程度。</p><p style="white-space: normal; widows: 1;">②基本日常生活活动是指：（1)穿衣：自己能够穿衣及脱衣；（2)移动：自己从一个房间到另一个房间；（3)行动：自己上下床或上下轮椅；（4)如厕：自己控制进行大小便；（5)进食：自己从已准备好的碗或碟中取食物放入口中；（6)洗澡：自己进行淋洛或盆洛。</p><p style="white-space: normal; widows: 1;">③护理依赖的程度分三级：（1)完全护理依赖指生活完全不能自理，上述六项基本日常生活活动均需护理者；（2)大部分护理依赖指生活大部不能自理，上述六项基本日常生活活动中三项或三项以上需要护理者；（3)部分护理依赖指部分生活不能自理，上述六项基本曰常生活活动中一项或一项以上需要护理者。</p><p style="white-space: normal; widows: 1;">1.3意识功能障碍</p><p style="white-space: normal; widows: 1;">意识功能是指意识和警觉状态下的一般精神功能，包括清醒和持续的觉醒状态。本标准中的意识功能障碍是指颅脑损伤导致植物状态。</p><p style="white-space: normal; widows: 1;">颅脑损伤导致植物状态   1级</p><p style="white-space: normal; widows: 1;">注：植物状态指由于严重颅脑损伤造成认知功能丧失，无意识活动，不能执行命令，保持自主呼吸和血压，有睡眠-醒觉周期，不能理解和表达语言，能自动睁眼或刺激下睁眼，可有无目的性眼球跟踪运动，丘脑下部及脑干功能基本保存。</p><p style="white-space: normal; widows: 1;">2眼，耳和有关的结构和功能</p><p style="white-space: normal; widows: 1;">2.1眼球损伤或视功能障碍</p><p style="white-space: normal; widows: 1;">视功能是指与感受存在的光线和感受视觉刺激的形式、大小、形状和颜色等有关的感觉功能。本标准中的视功能障碍是指眼盲目或低视力。</p><p style="white-space: normal; widows: 1;">双侧眼球缺失 1级</p><p style="white-space: normal; widows: 1;">一侧眼球缺失，且另一侧眼盲目5级   1级</p><p style="white-space: normal; widows: 1;">一侧眼球缺失，且另一侧眼盲目4级   2级</p><p style="white-space: normal; widows: 1;">一侧眼球缺失，且另一侧眼盲目3级   3级</p><p style="white-space: normal; widows: 1;">一侧眼球缺失，且另一侧眼低视力2级  4级</p><p style="white-space: normal; widows: 1;">一侧眼球缺失，且另一侧眼低视力1级  5级</p><p style="white-space: normal; widows: 1;">一侧眼球缺失 7级</p><p style="white-space: normal; widows: 1;"><br></p><p style="white-space: normal; widows: 1;">2.2视功能障碍</p><p style="white-space: normal; widows: 1;">除眼盲目和低视力外，本标准中的视功能障碍还包括视野缺损。</p><p style="white-space: normal; widows: 1;">双眼盲目5级    2级</p><p style="white-space: normal; widows: 1;">双眼视野缺损，直径小于5°  2级</p><p style="white-space: normal; widows: 1;">双眼盲目大于等于4级 3级</p><p style="white-space: normal; widows: 1;">双眼视野缺损，直径小于10° 3级</p><p style="white-space: normal; widows: 1;">双眼盲目大于等于3级 4级</p><p style="white-space: normal; widows: 1;">双眼视野缺损，直径小于20° 4级</p><p style="white-space: normal; widows: 1;">双眼低视力大于等于2级    5级</p><p style="white-space: normal; widows: 1;">双眼低视力大于等于1级    6级</p><p style="white-space: normal; widows: 1;">双眼视野缺损，直径小于60° 6级</p><p style="white-space: normal; widows: 1;">一眼盲目5级 7级</p><p style="white-space: normal; widows: 1;">一眼视野缺损，直径小于5°  7级</p><p style="white-space: normal; widows: 1;">一眼盲目大于等于4级 8级</p><p style="white-space: normal; widows: 1;">一眼视野缺损，直径小于10° 8级</p><p style="white-space: normal; widows: 1;">一眼盲目大于等于3级 9级</p><p style="white-space: normal; widows: 1;">一眼视野缺损，直径小于20° 9级</p><p style="white-space: normal; widows: 1;"><br></p><p style="white-space: normal; widows: 1;">一眼低视力大于等于1级。    10级</p><p style="white-space: normal; widows: 1;">一眼视野缺损，直径小于60°    10级</p><p style="white-space: normal; widows: 1;">注：①视力和视野</p><p style="white-space: normal; widows: 1;"><br></p><p style="white-space: normal; widows: 1;">级别  低视力及盲目分级标准</p><p style="white-space: normal; widows: 1;">最好矫正视力</p><p style="white-space: normal; widows: 1;">最好矫正视力低于  最低矫正视力等于或优于</p><p style="white-space: normal; widows: 1;">低视力   1   0.3 0.1</p><p style="white-space: normal; widows: 1;">2 0.1 0.05(三米指数）</p><p style="white-space: normal; widows: 1;">盲目 3   0.05    0.02(—米指数）</p><p style="white-space: normal; widows: 1;">4  0.02    光感</p><p style="white-space: normal; widows: 1;">5  无光感</p><p style="white-space: normal; widows: 1;"><br></p><p style="white-space: normal; widows: 1;">如果中心视力好而视野缩小，以中央注视点为中心，视野直径小于20°而大于10°者为盲目3级；如直径小于10°者为盲目4级。本标准视力以矫正视力为准，经治疗而无法恢复者。</p><p style="white-space: normal; widows: 1;">⑦视野缺损指因损伤导致眼球注视前方而不转动所能看到的空间范围缩窄，以致难以从事正常工作、学习或其他活动。</p><p style="white-space: normal; widows: 1;">2.3眼球的晶状体结构损伤</p><p style="white-space: normal; widows: 1;">外伤性白内障    10级</p><p style="white-space: normal; widows: 1;">注：外伤性白内障：凡未做手术者，均适用本条；外伤性白内障术后遗留相关视功能障碍，参照有关条款评定伤残等级。</p><p style="white-space: normal; widows: 1;">2.4眼睑结构损伤</p><p style="white-space: normal; widows: 1;">双侧眼睑显著缺损  8级</p><p style="white-space: normal; widows: 1;">双侧眼睑外翻 8级</p><p style="white-space: normal; widows: 1;">双侧眼睑闭合不全   8级</p><p style="white-space: normal; widows: 1;">一侧眼睑显著缺损   9级</p><p style="white-space: normal; widows: 1;">一侧眼睑外翻 9级</p><p style="white-space: normal; widows: 1;">一侧眼睑闭合不全   9级</p><p style="white-space: normal; widows: 1;">注：眼睑显著缺损指闭眼时眼睑不能完全覆盖角膜</p><p style="white-space: normal; widows: 1;"><br></p><p style="white-space: normal; widows: 1;">2.5耳廓结构损伤或听功能障碍</p><p style="white-space: normal; widows: 1;">听功能是指与感受存在的声音和辨别方位、音调、音量和音质有关的感觉功能。</p><p style="white-space: normal; widows: 1;">双耳听力损失大于等于91dB，且双侧耳廓缺失 2级</p><p style="white-space: normal; widows: 1;">双耳听力损失大于等于91dB，且一侧耳廓缺失 3级</p><p style="white-space: normal; widows: 1;">一耳听力损失大于等于91dB，另一耳听力损失大于等于71dB，且一侧耳廓缺失，另一侧耳廓缺失大于等于50?/?    3级</p><p style="white-space: normal; widows: 1;">双耳听力损失大于等于71dB，且双侧耳廓缺失 3级</p><p style="white-space: normal; widows: 1;">双耳听力损失大于等于71dB，且一侧耳廓缺失 4级</p><p style="white-space: normal; widows: 1;">双耳听力损失大于等于56dB，且双侧耳廓缺失 4级</p><p style="white-space: normal; widows: 1;">一耳听力损失大于等于91dB，另一耳听力损失大于等于71dB，且一侧耳廓缺失大于等于50%  4级</p><p style="white-space: normal; widows: 1;">双耳听力损失大于等于71dB，且一侧耳廓缺失大于等于50%  5级</p><p style="white-space: normal; widows: 1;">双耳听力损失大于等于56dB，且一侧耳廓缺失 5级</p><p style="white-space: normal; widows: 1;">双侧耳廓缺失 5级</p><p style="white-space: normal; widows: 1;">一侧耳廓缺失，且另一侧耳廓缺失大于等于50% 6级</p><p style="white-space: normal; widows: 1;">一侧耳廓缺失 8级</p><p style="white-space: normal; widows: 1;">一侧耳廓缺失大于等于50%  9级</p><p style="white-space: normal; widows: 1;">2.6听功能障碍</p><p style="white-space: normal; widows: 1;"><br></p><p style="white-space: normal; widows: 1;">双耳听力损失大于等于91dB   4级</p><p style="white-space: normal; widows: 1;">双耳听力损失大于等于81dB 5级</p><p style="white-space: normal; widows: 1;">一耳听力损失大于等于91dB，且另一耳听力损失大于等于71dB    5级</p><p style="white-space: normal; widows: 1;">双耳听力损失大于等于71dB 6级</p><p style="white-space: normal; widows: 1;">一耳听力损失大于等于91dB，且另一耳听力损失大于等于56dB    6级</p><p style="white-space: normal; widows: 1;">一耳听力损失大于等于91dB，且另一耳听力损失大于等于41dB    7级</p><p style="white-space: normal; widows: 1;">一耳听力损失大于等于71dB，且另一耳听力损失大于等于56dB    7级</p><p style="white-space: normal; widows: 1;">一耳听力损失大于等于71dB，且另一耳听力损失大于等于41dB    8级</p><p style="white-space: normal; widows: 1;"><br></p><p style="white-space: normal; widows: 1;">一耳听力损失大于等于91dB  8级</p><p style="white-space: normal; widows: 1;">一耳听力损失大于等于56dB，且另一耳听力损失大于等于41dB    9级</p><p style="white-space: normal; widows: 1;">一耳听力损失大于等于71dB 9级</p><p style="white-space: normal; widows: 1;">双耳听力损失大于等于26dB 10级</p><p style="white-space: normal; widows: 1;">一耳听力损失大于等于56dB    10级</p><p style="white-space: normal; widows: 1;"><br></p><p style="white-space: normal; widows: 1;">3发声和言语的结构和功能</p><p style="white-space: normal; widows: 1;">3.1鼻的结构损伤</p><p style="white-space: normal; widows: 1;">外鼻部完全缺失 5级</p><p style="white-space: normal; widows: 1;">外鼻部大部分缺损   7级</p><p style="white-space: normal; widows: 1;">鼻尖及一侧鼻翼缺损  8级</p><p style="white-space: normal; widows: 1;">双侧鼻腔或鼻咽部闭锁 8级</p><p style="white-space: normal; widows: 1;">一侧鼻翼缺损 9级</p><p style="white-space: normal; widows: 1;">单侧鼻腔或鼻孔闭锁  10级</p><p style="white-space: normal; widows: 1;">3.2口腔的结构损伤</p><p style="white-space: normal; widows: 1;">舌缺损大于全舌的2/3  3级</p><p style="white-space: normal; widows: 1;">舌缺损大于全舌的1/3    6级</p><p style="white-space: normal; widows: 1;">口腔损伤导致牙齿脱落大于等于16枚  9级</p><p style="white-space: normal; widows: 1;">口腔损伤导致牙齿脱落大于等于8枚   10级</p><p style="white-space: normal; widows: 1;">3.3发声和言语的功能障碍本标准中的发声和言语的功能障碍是指语言功能丧失。</p><p style="white-space: normal; widows: 1;">语言功能完全丧失  8级</p><p style="white-space: normal; widows: 1;">注：语言功能完全丧失指构成语言的口唇音、齿舌音、口盖音和喉头音的四种语言功能中，有三种以上不能构声、或声带全部切除，或因大脑语言中枢受伤害而患失语症，并须有资格的耳鼻喉科医师出具医疗诊断证明，但不包括任何心理障碍引致的失语。</p><p style="white-space: normal; widows: 1;">4心血管，免疫和呼吸系统的结构和功能4.1心脏的结构损伤或功能障碍</p><p style="white-space: normal; widows: 1;">胸部损伤导致心肺联合移植    1级</p><p style="white-space: normal; widows: 1;">胸部损伤导致心脏贯通伤修补术后，心电图有明显改变   3级</p><p style="white-space: normal; widows: 1;">胸部损伤导致心肌破裂修补   8级</p><p style="white-space: normal; widows: 1;">4.2脾结构损伤</p><p style="white-space: normal; widows: 1;">腹部损伤导致脾切除   8级</p><p style="white-space: normal; widows: 1;">腹部损伤导致脾部分切除    9级</p><p style="white-space: normal; widows: 1;">腹部损伤导致脾破裂修补    10级</p><p style="white-space: normal; widows: 1;">4.3肺的结构损伤</p><p style="white-space: normal; widows: 1;">胸部损伤导致一侧全肺切除  4级</p><p style="white-space: normal; widows: 1;">胸部损伤导致双侧肺叶切除   4级</p><p style="white-space: normal; widows: 1;">胸部损伤导致同侧双肺叶切除  5级</p><p style="white-space: normal; widows: 1;">胸部损伤导致肺叶切除 7级</p><p style="white-space: normal; widows: 1;">4.4胸廓的结构损伤</p><p style="white-space: normal; widows: 1;">本标准中的胸廓的结构损伤是指肋骨骨折或缺失。</p><p style="white-space: normal; widows: 1;">胸部损伤导致大于等于12根肋骨骨折    8级</p><p style="white-space: normal; widows: 1;">胸部损伤导致大于等于8根肋骨骨折   9级</p><p style="white-space: normal; widows: 1;">胸部损伤导致大于等于4根肋骨缺失   9级</p><p style="white-space: normal; widows: 1;">胸部损伤导致大于等于4根肋骨骨折   10级</p><p style="white-space: normal; widows: 1;">5消化、代谢和内分泌系统有关的结构和功能</p><p style="white-space: normal; widows: 1;">5.1咀嚼和吞咽功能障碍</p><p style="white-space: normal; widows: 1;">咀嚼是指用后牙（如磨牙）碾、磨或咀嚼食物的功能。吞咽是指通过口腔、咽和食道把食物和饮料以适宜的频率和速度送入胃中的功</p><p style="white-space: normal; widows: 1;">能。</p><p style="white-space: normal; widows: 1;">咀嚼、吞咽功能完全丧失   1级</p><p style="white-space: normal; widows: 1;">注：咀嚼、吞咽功能丧失指由于牙齿以外的原因引起器质障碍或机能障碍，以致不能作咀嚼、吞咽运动，除流质食物外不能摄取或吞咽的状态。</p><p style="white-space: normal; widows: 1;">5.2肠的结构损伤</p><p style="white-space: normal; widows: 1;">腹部损伤导致小肠切除大于等于90%    1级</p><p style="white-space: normal; widows: 1;">腹部损伤导致小肠切除大于等于75%，合并短肠综合症  2级</p><p style="white-space: normal; widows: 1;">腹部损伤导致小肠切除大于等于75%  4级</p><p style="white-space: normal; widows: 1;">腹部或骨盆部损伤导致全结肠、直肠、肛门结构切除，回肠造瘘   4级</p><p style="white-space: normal; widows: 1;">腹部或骨盆部损伤导致直肠、肛门切除，且结肠部分切除，结肠造瘘 5级</p><p style="white-space: normal; widows: 1;">腹部损伤导致小肠切除大于等于50%,且包括回盲部切除 6级</p><p style="white-space: normal; widows: 1;">腹部损伤导致小肠切除大于等于50%  7级</p><p style="white-space: normal; widows: 1;">腹部损伤导致结肠切除大于等于50%  7级</p><p style="white-space: normal; widows: 1;">腹部损伤导致结肠部分切除   8级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致直肠、肛门损伤，且遗留永久性乙状结肠造口    9级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致直肠、肛门损伤，且瘢痕形成   10级</p><p style="white-space: normal; widows: 1;">5.3胃结构损伤</p><p style="white-space: normal; widows: 1;">腹部损伤导致全胃切除 4级</p><p style="white-space: normal; widows: 1;">腹部损伤导致胃切除大于等于50%   7级</p><p style="white-space: normal; widows: 1;">5.4胰结构损伤或代谢功能障碍本标准中的代谢功能障碍是指胰岛素依赖。</p><p style="white-space: normal; widows: 1;">腹部损伤导致胰完全切除   1级</p><p style="white-space: normal; widows: 1;">腹部损伤导致胰切除大于等于50%，且伴有胰岛素依赖  3级</p><p style="white-space: normal; widows: 1;">腹部损伤导致胰头、十二指肠切除    4级</p><p style="white-space: normal; widows: 1;">腹部损伤导致胰切除大于等于50%   6级</p><p style="white-space: normal; widows: 1;">腹部损伤导致胰部分切除    8级</p><p style="white-space: normal; widows: 1;">5.5肝结构损伤</p><p style="white-space: normal; widows: 1;">腹部损伤导致肝切除大于等于75%    2级</p><p style="white-space: normal; widows: 1;">腹部损伤导致肝切除大于等于50%   5级</p><p style="white-space: normal; widows: 1;">腹部损伤导致肝部分切除    8级</p><p style="white-space: normal; widows: 1;"><br></p><p style="white-space: normal; widows: 1;">6泌尿和生殖系统有关的结构和功能6.1泌尿系统的结构损伤</p><p style="white-space: normal; widows: 1;">腹部损伤导致双侧肾切除  1级</p><p style="white-space: normal; widows: 1;">腹部损伤导致孤肾切除 1级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致双侧输尿管缺失 5级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致双侧输尿管闭锁 5级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致一侧输尿管缺失，另一侧输尿管闭锁    5级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致膀胱切除    5级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致尿道闭锁    5级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致一侧输尿管缺失，另一侧输尿管严重狭窄  7级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致一侧输尿管闭锁，另一侧输尿管严重狭窄  7级</p><p style="white-space: normal; widows: 1;">腹部损伤导致一侧肾切除    8级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致双侧输尿管严重狭窄   8级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致一侧输尿管缺失，另一侧输尿管狭窄    8级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致一侧输尿管闭锁，另一侧输尿管狭窄    8级</p><p style="white-space: normal; widows: 1;">腹部损伤导致一侧肾部分切除  9级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致一侧输尿管缺失 9级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致一侧输尿管闭锁 9级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致尿道狭窄    9级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致膀胱部分切除  9级</p><p style="white-space: normal; widows: 1;">腹部损伤导致肾破裂修补    10级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致一侧输尿管严重狭窄  10级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致膀胱破裂修补 10级</p><p style="white-space: normal; widows: 1;">6.2生殖系统的结构损伤</p><p style="white-space: normal; widows: 1;">会阴部损伤导致双侧睾丸缺失  3级</p><p style="white-space: normal; widows: 1;">会阴部损伤导致双侧睾丸完全萎缩    3级</p><p style="white-space: normal; widows: 1;">会阴部损伤导致一侧睾丸缺失，另一侧睾丸完全萎缩    3级</p><p style="white-space: normal; widows: 1;">会阴部损伤导致阴茎体完全缺失 4级</p><p style="white-space: normal; widows: 1;">会阴部损伤导致阴道闭锁    5级</p><p style="white-space: normal; widows: 1;">会阴部损伤导致阴茎体缺失大于50%  5级</p><p style="white-space: normal; widows: 1;">会阴部损伤导致双侧输精管缺失 6级</p><p style="white-space: normal; widows: 1;">会阴部损伤导致双侧输精管闭锁 6级</p><p style="white-space: normal; widows: 1;">会阴部损伤导致一侧输精管缺失，另一侧输精管闭锁    6级</p><p style="white-space: normal; widows: 1;">胸部损伤导致女性双侧乳房缺失 7级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致子宫切除    7级</p><p style="white-space: normal; widows: 1;">胸部损伤导致女性一侧乳房缺失，另一侧乳房部分缺失   8级</p><p style="white-space: normal; widows: 1;">胸部损伤导致女性一侧乳房缺失 9级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致子宫部分切除  9级</p><p style="white-space: normal; widows: 1;">骨盆部损伤导致子宫破裂修补  10级</p><p style="white-space: normal; widows: 1;">会阴部损伤导致一侧睾丸缺失 10级</p><p style="white-space: normal; widows: 1;">会阴部损伤导致一侧睾丸完全萎缩   10级</p><p style="white-space: normal; widows: 1;">会阴部损伤导致一侧输精管缺失    10级</p><p style="white-space: normal; widows: 1;">会阴部损伤导致一侧输精管闭锁    10级</p><p style="white-space: normal; widows: 1;"><br></p><p style="white-space: normal; widows: 1;">7神经肌肉骨骼和运动有关的结构和功能</p><p style="white-space: normal; widows: 1;">7.1头颈部的结构损伤</p><p style="white-space: normal; widows: 1;">双侧上颌骨完全缺失   2级</p><p style="white-space: normal; widows: 1;">双侧下颌骨完全缺失  2级</p><p style="white-space: normal; widows: 1;">一侧上颌骨及对侧下颌骨完全缺失    2级</p><p style="white-space: normal; widows: 1;">同侧上、下颌骨完全缺失    3级</p><p style="white-space: normal; widows: 1;">上颌骨、下颌骨缺损，且牙齿脱落大于等于24枚 3级</p><p style="white-space: normal; widows: 1;">一侧上颌骨完全缺失  3级</p><p style="white-space: normal; widows: 1;">一侧下颌骨完全缺失  3级</p><p style="white-space: normal; widows: 1;">一侧上颌骨缺损大于等于50?/?，且口腔、颜面部软组织缺损大于20cm2   4级</p><p style="white-space: normal; widows: 1;">一侧下颌骨缺损大于等于6cm，且口腔、颜面部软组织缺损大于20cm2 4级</p><p style="white-space: normal; widows: 1;">面颊部洞穿性缺损大于20cm2    4级</p><p style="white-space: normal; widows: 1;">上颌骨、下颌骨缺损，且牙齿脱落大于等于20枚 5级</p><p style="white-space: normal; widows: 1;">一侧上颌骨缺损大于25?/?，小于50?/?，且口腔、颜面部软组织缺损大于10cm2 5级</p><p style="white-space: normal; widows: 1;">一侧下颌骨缺损大于等于4cm，且口腔、颜面部软组织缺损大于10cm2 5级</p><p style="white-space: normal; widows: 1;">一侧上颌骨缺损等于25?/?，且口腔、颜面部软组织缺损大于10cm2 6级</p><p style="white-space: normal; widows: 1;">面部软组织缺损大于20cm2，且伴发涎瘘   6级</p><p style="white-space: normal; widows: 1;">上颌骨、下颌骨缺损，且牙齿脱落大于等于16枚 7级</p><p style="white-space: normal; widows: 1;">上颌骨、下颌骨缺损，且牙齿脱落大于等于12枚 8级</p><p style="white-space: normal; widows: 1;">上颌骨、下颌骨缺损，且牙齿脱落大于等于8枚  9级</p><p style="white-space: normal; widows: 1;">上颌骨、下颌骨缺损，且牙齿脱落大于等于4枚  10级</p><p style="white-space: normal; widows: 1;">颅骨缺损大于等于6cm2  10级</p><p style="white-space: normal; widows: 1;">7.2头颈部关节功能障碍</p><p style="white-space: normal; widows: 1;">单侧颞下颌关节强直，张口困难III度 6级</p><p style="white-space: normal; widows: 1;">双侧颞下颌关节强直，张口困难III度 6级</p><p style="white-space: normal; widows: 1;">双侧颞下颌关节强直，张口困难II度  8级</p><p style="white-space: normal; widows: 1;">一侧颞下颌关节强直，张口困难I度   10级</p><p style="white-space: normal; widows: 1;">注：张口困难判定及测量方法是以患者自身的食指、中指、无名指并列垂直置入上、下中切牙切缘间测量。正常张口度指张口时上述三指可垂直置入上、下切牙切缘间（相当于4.5cm左右)；张口困难I度指大张口时，只能垂直置入食指和中指（相当于3cm左右)；张口困难II度指大张口时，只能垂直置入食指（相当于1.7cm左右）；张口困难III度指大张口时，上、下切牙间距小于食指之横径。</p><p style="white-space: normal; widows: 1;">7.3上肢的结构损伤，手功能或关节功能障碍</p><p style="white-space: normal; widows: 1;">双手完全缺失  4级</p><p style="white-space: normal; widows: 1;">双手完全丧失功能   4级</p><p style="white-space: normal; widows: 1;">一手完全缺失，另一手完全丧失功能   4级</p><p style="white-space: normal; widows: 1;">双手缺失（或丧失功能）大于等于90?/?   5级</p><p style="white-space: normal; widows: 1;">双手缺失（或丧失功能）大于等于70?/?   6级</p><p style="white-space: normal; widows: 1;">双手缺失（或丧失功能）大于等于50?/?   7级</p><p style="white-space: normal; widows: 1;">一上肢三大关节中，有两个关节完全丧失功能   7级</p><p style="white-space: normal; widows: 1;">一上肢三大关节中，有一个关节完全丧失功能   8级</p><p style="white-space: normal; widows: 1;">双手缺失（或丧失功能）大于等于30?/?   8级</p><p style="white-space: normal; widows: 1;">双手缺失（或丧失功能）大于等于10?/?   9级</p><p style="white-space: normal; widows: 1;">双上肢长度相差大于等于10cm    9级</p><p style="white-space: normal; widows: 1;">双上肢长度相差大于等于4cm 10级</p><p style="white-space: normal; widows: 1;">一上肢三大关节中，因骨折累及关节面导致一个关节功能部分丧失 10级</p><p style="white-space: normal; widows: 1;">注：手缺失和丧失功能的计算：一手拇指占一手功能的36%，其中末节和近节指节各占18%；食指、中指各占一手功能的18%，其中末节指节占8%，中节指节占7%，近节指节占3%；无名指和小指各占一手功能的9%，其中末节指节占4?%，中节指节占3%，近节指节占2?%。一手掌占一手功能的10%，其中第一掌骨占4%，第二、第三掌骨各占2%，第四、第五掌骨各占%。本标准中，双手缺失或丧失功能的程度是按前面方式累加计算的结果。</p><p style="white-space: normal; widows: 1;">7.4骨盆部的结构损伤</p><p style="white-space: normal; widows: 1;">骨盆环骨折，且两下肢相对长度相差大于等于8cm    7级</p><p style="white-space: normal; widows: 1;">髋臼骨折，且两下肢相对长度相差大于等于8cm 7级</p><p style="white-space: normal; widows: 1;">骨盆环骨折，且两下肢相对长度相差大于等于6cm    8级</p><p style="white-space: normal; widows: 1;">髋臼骨折，且两下肢相对长度相差大于等于6cm 8级</p><p style="white-space: normal; widows: 1;">骨盆环骨折，且两下肢相对长度相差大于等于4cm    9级</p><p style="white-space: normal; widows: 1;">髋臼骨折，且两下肢相对长度相差大于等于4cm 9级</p><p style="white-space: normal; widows: 1;">骨盆环骨折，且两下肢相对长度相差大于等于2cm    10级</p><p style="white-space: normal; widows: 1;">髋臼骨折，且两下肢相对长度相差大于等于2cm    10级</p><p style="white-space: normal; widows: 1;">7.5下肢的结构损伤，足功能或关节功能障碍</p><p style="white-space: normal; widows: 1;">双足跗跖关节以上缺失    6级</p><p style="white-space: normal; widows: 1;">双下肢长度相差大于等于8cm 7级</p><p style="white-space: normal; widows: 1;">一下肢三大关节中，有两个关节完全丧失功能   7级</p><p style="white-space: normal; widows: 1;">双足足弓结构完全破坏 7级</p><p style="white-space: normal; widows: 1;">一足跗跖关节以上缺失 7级</p><p style="white-space: normal; widows: 1;">双下肢长度相差大于等于6cm 8级</p><p style="white-space: normal; widows: 1;">一足足弓结构完全破坏，另一足足弓结构破坏大于等于1/3    8级</p><p style="white-space: normal; widows: 1;">双足十趾完全缺失   8级</p><p style="white-space: normal; widows: 1;">一下肢三大关节中，有一个关节完全丧失功能   8级</p><p style="white-space: normal; widows: 1;">双足十趾完全丧失功能 8级</p><p style="white-space: normal; widows: 1;">双下肢长度相差大于等于4cm 9级</p><p style="white-space: normal; widows: 1;">一足足弓结构完全破坏 9级</p><p style="white-space: normal; widows: 1;">双足十趾中，大于等于五趾缺失 9级</p><p style="white-space: normal; widows: 1;">一足五趾完全丧失功能 9级</p><p style="white-space: normal; widows: 1;">一足足弓结构破坏大于等于1/3    10级</p><p style="white-space: normal; widows: 1;">双足十趾中，大于等于两趾缺失    10级</p><p style="white-space: normal; widows: 1;">双下肢长度相差大于等于2cm    10级</p><p style="white-space: normal; widows: 1;">一下肢三大关节中，因骨折累及关节面导致一个关节功能部分丧失 10级</p><p style="white-space: normal; widows: 1;"><br></p><p style="white-space: normal; widows: 1;">注：①足弓结构破坏：指意外损伤导致的足弓缺失或丧失功能。</p><p style="white-space: normal; widows: 1;">②足弓结构完全破坏指足的内、外侧纵弓和横弓结构完全破坏，包括缺失和丧失功能；足弓1/3结构破坏指足三弓的任一弓的结构</p><p style="white-space: normal; widows: 1;">破坏。</p><p style="white-space: normal; widows: 1;">③足趾缺失：指自趾关节以上完全切断。</p><p style="white-space: normal; widows: 1;">7.6四肢的结构损伤，肢体功能或关节功能障碍</p><p style="white-space: normal; widows: 1;">三肢以上缺失(上肢在腕关节以上，下肢在踩关节以上）  1级</p><p style="white-space: normal; widows: 1;">三肢以上完全丧失功能 1级</p><p style="white-space: normal; widows: 1;">二肢缺失（上肢在腕关节以上，下肢在踩关节以上)，且第三肢完全丧失功能 1级</p><p style="white-space: normal; widows: 1;">一肢缺失（上肢在腕关节以上，下肢在踩关节以上)，且另二肢完全丧失功能 1级</p><p style="white-space: normal; widows: 1;">二肢缺失(上肢在肘关节以上，下肢在膝关节以上）    2级</p><p style="white-space: normal; widows: 1;">一肢缺失（上肢在肘关节以上，下肢在膝关节以上)，且另一肢完全丧失功能 2级</p><p style="white-space: normal; widows: 1;">二肢完全丧失功能   2级</p><p style="white-space: normal; widows: 1;">一肢缺失（上肢在腕关节以上，下肢在踩关节以上)，且另一肢完全丧失功能 3级</p><p style="white-space: normal; widows: 1;">二肢缺失(上肢在腕关节以上，下肢在踩关节以上）    3级</p><p style="white-space: normal; widows: 1;">两上肢、或两下肢、或一上肢及一下肢，各有三大关节中的两个关节完全丧失功能   4级</p><p style="white-space: normal; widows: 1;">一肢缺失(上肢在肘关节以上，下肢在膝关节以上）    5级</p><p style="white-space: normal; widows: 1;">一肢完全丧失功能   5级</p><p style="white-space: normal; widows: 1;">一肢缺失(上肢在腕关节以上，下肢在踩关节以上）    6级</p><p style="white-space: normal; widows: 1;">四肢长骨一骺板以上粉碎性骨折 9级</p><p style="white-space: normal; widows: 1;">注：①骺板：骺板的定义只适用于儿童，四肢长骨骺板骨折可能影响肢体发育，如果存在肢体发育障碍的，应当另行评定伤残等级。</p><p style="white-space: normal; widows: 1;">②肢体丧失功能指意外损伤导致肢体三大关节（上肢腕关节、肘关节、肩关节或下肢踩关节、膝关节、髋关节）功能的丧失。</p><p style="white-space: normal; widows: 1;">③关节功能的丧失指关节永久完全僵硬、或麻痹、或关节不能随意识活动。</p><p style="white-space: normal; widows: 1;">7.7脊柱结构损伤和关节活动功能障碍</p><p style="white-space: normal; widows: 1;">本标准中的脊柱结构损伤是指颈椎或腰椎的骨折脱位，本标准中的关节活动功能障碍是指颈部或腰部活动度丧失。</p><p style="white-space: normal; widows: 1;">脊柱骨折脱位导致颈椎或腰椎畸形愈合，且颈部或腰部活动度丧失大于等于m    7级</p><p style="white-space: normal; widows: 1;">脊柱骨折脱位导致颈椎或腰椎畸形愈合，且颈部或腰部活动度丧失大于等于50%   8级</p><p style="white-space: normal; widows: 1;">脊柱骨折脱位导致颈椎或腰椎畸形愈合，且颈部或腰部活动度丧失大于等于25%   9级</p><p style="white-space: normal; widows: 1;">7.8肌肉力量功能障碍</p><p style="white-space: normal; widows: 1;">肌肉力量功能是指与肌肉或肌群收缩产生力量有关的功能。本标准中的肌肉力量功能障碍是指四肢瘫、偏瘫、截瘫或单瘫。</p><p style="white-space: normal; widows: 1;">四肢瘫（三肢以上肌力小于等于3级）   1级</p><p style="white-space: normal; widows: 1;">截瘫(肌力小于等于2级)且大便和小便失禁   1级</p><p style="white-space: normal; widows: 1;">四肢瘫（二肢以上肌力小于等于2级）  2级</p><p style="white-space: normal; widows: 1;">偏瘫（肌力小于等于2级）   2级</p><p style="white-space: normal; widows: 1;">截瘫（肌力小于等于2级）   2级</p><p style="white-space: normal; widows: 1;">四肢瘫（二肢以上肌力小于等于3级）  3级</p><p style="white-space: normal; widows: 1;">偏瘫（肌力小于等于3级）   3级</p><p style="white-space: normal; widows: 1;">截瘫（肌力小于等于3级）   3级</p><p style="white-space: normal; widows: 1;">四肢瘫（二肢以上肌力小于等于4级）  4级</p><p style="white-space: normal; widows: 1;">偏瘫（一肢肌力小于等于2级） 5级</p><p style="white-space: normal; widows: 1;">截瘫（一肢肌力小于等于2级） 5级</p><p style="white-space: normal; widows: 1;">单瘫（肌力小于等于2级）   5级</p><p style="white-space: normal; widows: 1;">偏瘫（一肢肌力小于等于3级） 6级</p><p style="white-space: normal; widows: 1;">截瘫（一肢肌力小于等于3级） 6级</p><p style="white-space: normal; widows: 1;">单瘫（肌力小于等于3级）   6级</p><p style="white-space: normal; widows: 1;">偏瘫（一肢肌力小于等于4级） 7级</p><p style="white-space: normal; widows: 1;">截瘫（一肢肌力小于等于4级） 7级</p><p style="white-space: normal; widows: 1;">单瘫（肌力小于等于4级）   8级</p><p style="white-space: normal; widows: 1;">注：①偏瘫指一侧上下肢的瘫痪。</p><p style="white-space: normal; widows: 1;">②截瘫指脊髓损伤后，受伤平面以下双侧肢体感觉、运动、反射等消失和膀胱、肛门括约肌功能丧失的病症。</p><p style="white-space: normal; widows: 1;">③单瘫指一个肢体或肢体的某一部分瘫痪。</p><p style="white-space: normal; widows: 1;">④肌力：为判断肢体瘫痪程度，将肌力分级划分为0-5级。</p><p style="white-space: normal; widows: 1;">0级：肌肉完全瘫痪，毫无收缩。</p><p style="white-space: normal; widows: 1;">1级：可看到或触及肌肉轻微收缩，但不能产生动作。</p><p style="white-space: normal; widows: 1;">2级：肌肉在不受重力影响下，可进行运动，即肢体能在床面上移动，但不能抬高。</p><p style="white-space: normal; widows: 1;">3级：在和地心引力相反的方向中尚能完成其动作，但不能对抗外加的阻力。</p><p style="white-space: normal; widows: 1;">4级：能对抗一定的阻力，但较正常人为低。</p><p style="white-space: normal; widows: 1;">5级：正常肌力。</p><p style="white-space: normal; widows: 1;"><br></p><p style="white-space: normal; widows: 1;">8皮肤和有关的结构和功能</p><p style="white-space: normal; widows: 1;">8.1头颈部皮肤结构损伤和修复功能障碍</p><p style="white-space: normal; widows: 1;">皮肤的修复功能是指修复皮肤破损和其他损伤的功能。本标准中的皮肤修复功能障碍是指瘢痕形成。</p><p style="white-space: normal; widows: 1;">头颈部III度烧伤，面积大于等于全身体表面积的8/  2级</p><p style="white-space: normal; widows: 1;">面部皮肤损伤导致瘢痕形成，且瘢痕面积大于等于面部皮肤面积的90%   2级</p><p style="white-space: normal; widows: 1;">颈部皮肤损伤导致瘢痕形成，颈部活动度完全丧失 3级</p><p style="white-space: normal; widows: 1;">面部皮肤损伤导致瘢痕形成，且瘢痕面积大于等于面部皮肤面积的80%   3级</p><p style="white-space: normal; widows: 1;">颈部皮肤损伤导致瘢痕形成，颈部活动度丧失大于等于75%    4级</p><p style="white-space: normal; widows: 1;">面部皮肤损伤导致瘢痕形成，且瘢痕面积大于等于面部皮肤面积的60%   4级</p><p style="white-space: normal; widows: 1;">头颈部III度烧伤，面积大于等于全身体表面积的5%，且小于8%    5级</p><p style="white-space: normal; widows: 1;">颈部皮肤损伤导致瘢痕形成，颈部活动度丧失大于等于50%    5级</p><p style="white-space: normal; widows: 1;">面部皮肤损伤导致瘢痕形成，且瘢痕面积大于等于面部皮肤面积的40%   5级</p><p style="white-space: normal; widows: 1;">面部皮肤损伤导致瘢痕形成，且瘢痕面积大于等于面部皮肤面积的20%   6级</p><p style="white-space: normal; widows: 1;">头部撕脱伤后导致头皮缺失，面积大于等于头皮面积的20%    6级</p><p style="white-space: normal; widows: 1;">颈部皮肤损伤导致颈前三角区瘢痕形成，且瘢痕面积大于等于颈前三角区面积的m   7级</p><p style="white-space: normal; widows: 1;">面部皮肤损伤导致瘢痕形成，且瘢痕面积大于等于24cm2    7级</p><p style="white-space: normal; widows: 1;">头颈部III度烧伤，面积大于等于全身体表面积的2%，且小于5 8级</p><p style="white-space: normal; widows: 1;">颈部皮肤损伤导致颈前三角区瘢痕形成，且瘢痕面积大于等于颈前三角区面积的50% 8级</p><p style="white-space: normal; widows: 1;">面部皮肤损伤导致瘢痕形成，且瘢痕面积大于等于18cm2    8级</p><p style="white-space: normal; widows: 1;">面部皮肤损伤导致瘢痕形成，且瘢痕面积大于等于12cm2或面部线条状瘢痕大于等于20cm    9级</p><p style="white-space: normal; widows: 1;">面部皮肤损伤导致瘢痕形成，且瘢痕面积大于等于6cm2或面部线条状瘢痕大于等于10cm 10级</p><p style="white-space: normal; widows: 1;">注：①瘢痕：指创面愈合后的增生性瘢痕，不包括皮肤平整、无明显质地改变的萎缩性瘢痕或疤痕。</p><p style="white-space: normal; widows: 1;">②面部的范围和瘢痕面积的计算：面部的范围指上至发际、下至下颌下缘、两侧至下颌支后缘之间的区域，包括额部、眼部、眶部、鼻部、口唇部、颏部、颧部、颊部和腮腺咬肌部。面部瘢痕面积的计算釆用全面部和5等分面部以及实测瘢痕面积的方法，分别计算瘢痕面积。面部多处瘢痕，其面积可以累加计算。</p><p style="white-space: normal; widows: 1;">③颈前三角区：两边为胸锁乳突肌前缘，底为舌骨体上缘及下颌骨下缘。</p><p style="white-space: normal; widows: 1;">8.2各部位皮肤结构损伤和修复功能障碍</p><p style="white-space: normal; widows: 1;">皮肤损伤导致瘢痕形成，且瘢痕面积大于等于全身体表面积的90%   1级</p><p style="white-space: normal; widows: 1;">躯干及四肢III度烧伤，面积大于等于全身皮肤面积的60%   1级</p><p style="white-space: normal; widows: 1;">皮肤损伤导致瘢痕形成，且瘢痕面积大于等于全身体表面积的80% 2级</p><p style="white-space: normal; widows: 1;">皮肤损伤导致瘢痕形成，且瘢痕面积大于等于全身体表面积的70% 3级</p><p style="white-space: normal; widows: 1;">躯干及四肢III度烧伤，面积大于等于全身皮肤面积的40%   3级</p><p style="white-space: normal; widows: 1;">皮肤损伤导致瘢痕形成，且瘢痕面积大于等于全身体表面积的60% 4级</p><p style="white-space: normal; widows: 1;">皮肤损伤导致瘢痕形成，且瘢痕面积大于等于全身体表面积的50% 5级</p><p style="white-space: normal; widows: 1;">躯干及四肢III度烧伤，面积大于等于全身皮肤面积的20%   5级</p><p style="white-space: normal; widows: 1;">皮肤损伤导致瘢痕形成，且瘢痕面积大于等于全身体表面积的40% 6级</p><p style="white-space: normal; widows: 1;">腹部损伤导致腹壁缺损面积大于等于腹壁面积的25%   6级</p><p style="white-space: normal; widows: 1;">皮肤损伤导致瘢痕形成，且瘢痕面积大于等于全身体表面积的30% 7级</p><p style="white-space: normal; widows: 1;">躯干及四肢III度烧伤，面积大于等于全身皮肤面积的10%   7级</p><p style="white-space: normal; widows: 1;">皮肤损伤导致瘢痕形成，且瘢痕面积大于等于全身体表面积的20% 8级</p><p style="white-space: normal; widows: 1;">皮肤损伤导致瘢痕形成，且瘢痕面积大于等于全身体表面积的5   9级</p><p style="white-space: normal; widows: 1;">注：①全身皮肤瘢痕面积的计算：按皮肤瘢痕面积占全身体表面积的百分数来计算，即中国新九分法：在100%的体表总面积中：头颈部占9%(9X1)(头部、面部、颈部各占3%);双上肢占18%(9X2)(双上臂7%，双前臂6%，双手5%);躯干前后包括会阴占27%(9X3)(前躯13%，后躯13%，会阴1%);双下肢（含臀部）占46%(双臀5%，双大腿21%。双小腿13%，双足7%)(9X5+1)(女性双足和臀各占</p><p style="white-space: normal; widows: 1;">6%）。</p><p style="white-space: normal; widows: 1;">②烧伤面积和烧伤深度：烧伤面积的计算按中国新九分法，烧伤深度按三度四分法。III度烧伤指烧伤深达皮肤全层甚至达到皮下、肌肉和骨骼。烧伤事故不包括冻伤、吸入性损伤（又称呼吸道烧伤）和电击伤。烧伤后按烧伤面积、深度评定伤残等级，待医疗终结后，可以依据造成的功能障碍程度、皮肤瘢痕面积大小评定伤残等级，最终的伤残等级以严重者为准。</p><p><br></p> <br><br><br><br>        <p style="white-space: normal; widows: 1;">安联财产保险（中国）有限公司</p><p style="white-space: normal; widows: 1;">附加住院医疗费用补偿保险条款（2016版）</p><p style="white-space: normal; widows: 1;">1.附加保险合同订立</p><p style="white-space: normal; widows: 1;">本附加保险合同条款（以下简称“本附加条款”须附加于保险人主保险合同条款使用。</p><p style="white-space: normal; widows: 1;">2.保险责任</p><p style="white-space: normal; widows: 1;">(一）一般医疗保险金</p><p style="white-space: normal; widows: 1;">在保险期间内，若被保险人因遭受主合同所约定的意外伤害，或在等待期（见释义）后因罹患疾病，在医疗机构（见释义）接受治疗的，保险人按下列约定给付保险金：</p><p style="white-space: normal; widows: 1;">1.住院医疗费用</p><p style="white-space: normal; widows: 1;">被保险人经中华人民共和国境内（不包括港、澳、台地区）二级以上（含二级）医院，或保险人认可的医疗机构诊断必须住院（见释义）治疗的，保险人对于被保险人需个人支付的、必需且合理的住院医疗费用（见释义)，在扣除约定的免赔额后，依照约定的给付比例赔付。住院医疗费用包括床位费（见释义）、膳食费（见释义)、护理费（见释义）、重症监护室床位费、诊疗费、检查检验费（见释义）、治疗费（见释义）、药品费（见释义)、手术费（见释义）等。</p><p style="white-space: normal; widows: 1;">2.特殊门诊医疗费用</p><p style="white-space: normal; widows: 1;">被保险人在中华人民共和国境内（不包括港、澳、台地区）二级以上（含二级）医院，或保险人认可的医疗机构接受特殊门诊（不含特需门诊）治疗的，保险人对于被保险人需个人支付的、必需且合理的特殊门诊医疗费用，在扣除约定的免赔额后，依照约定的给付比例赔付。特殊门诊医疗费用包括：</p><p style="white-space: normal; widows: 1;">(1)门诊肾透析费；</p><p style="white-space: normal; widows: 1;">(2)门诊恶性肿瘤（见释义）治疗费，包括化学疗法（见释义)、放射疗法（见释义)、肿瘤免疫疗法（见释义）、肿瘤内分泌疗法（见释义）、肿瘤靶向疗法（见释义）治疗费用；</p><p style="white-space: normal; widows: 1;">(3)器官移植后的门诊抗排异治疗费。</p><p style="white-space: normal; widows: 1;">保险人对住院医疗费用和特殊门诊医疗费用的累计给付之和以本附加条款约定的一般医疗保险金的保险金额为限，当保险人累积给付金额达到本项保险金额时，保险人对被保险人在本项下的保险责任终止。</p><p style="white-space: normal; widows: 1;">(二）恶性肿瘤医疗保险金</p><p style="white-space: normal; widows: 1;">在保险期间内，若被保险人在等待期后因初次确诊罹患恶性肿瘤，在医疗机构接受治疗的，保险人首先按照第二条第（一）款的约定给付一般医疗保险金，当保险人累积给付金额达到一般医疗保险金的保险金额后，保险人依照下列约定给付恶性肿瘤医疗保险金：</p><p style="white-space: normal; widows: 1;">1.恶性肿瘤住院医疗费用</p><p style="white-space: normal; widows: 1;">被保险人经中华人民共和国境内（不包括港、澳、台地区）二级以上（含二级）医院，或保险人认可的医疗机构诊断必须住院治疗的，保险人对于被保险人需个人支付的、必需且合理的住院医疗费用，在扣除约定的免赔额</p><p style="white-space: normal; widows: 1;">后，依照约定的给付比例赔付。住院医疗费用包括床位费、膳食费、护理费、重症监护室床位费、诊疗费、检查检验费、治疗费、药品费、手术费等。</p><p style="white-space: normal; widows: 1;">2.恶性肿瘤特殊门诊医疗费用</p><p style="white-space: normal; widows: 1;">被保险人在中华人民共和国境内（不包括港、澳、台地区）二级以上（含二级）医院，或保险人认可的医疗机构接受特殊门诊（不含特需门诊）治疗的，保险人对于被保险人需个人支付的、必需且合理的特殊门诊医疗费用，在扣除约定的免赔额后，依照约定的给付比例赔付。恶性肿瘤特殊门诊医疗费用包括化学疗法、放射疗法、肿瘤免疫疗法、肿瘤内分泌疗法、肿瘤靶向疗法治疗费用。</p><p style="white-space: normal; widows: 1;">保险人对恶性肿瘤住院医疗费用和恶性肿瘤特殊门诊医疗费用的累积给付之和以本附加条款约定的恶性肿瘤医疗保险金的保险金额为限，当保险人累积给付金额达到本项保险金额时，保险人对被保险人在本项下的保险责任终止。</p><p style="white-space: normal; widows: 1;">3.补偿原则和赔付标准</p><p style="white-space: normal; widows: 1;">（一）本附加条款适用医疗费用补偿原则。若被保险人已从其他途径（包括社会医疗保险、公费医疗、工作单位、</p><p style="white-space: normal; widows: 1;">保险人在内的任何商业保险机构等）获得医疗费用补偿，则保险人仅对被保险人实际发生的医疗费用扣除其所获医疗费用补偿后的余额按照本附加条款的约定进行赔付.社保卡个人账户部分支出视为个人支付，不属于已获得的医疗费用补偿。</p><p style="white-space: normal; widows: 1;">(二）本附加条款所指免赔额均指年免赔额，由被保险人自行承担，是本附加条款不予赔偿的部分。在保险期间内，一般医疗保险金和恶性肿瘤医疗保险金共用同一个免赔额.被保险人从其他途径已获得的医疗费用补偿可用于抵扣免赔额。但通过社会医疗保险和公费医疗保险获得的补偿，不可用于抵扣免赔额。</p><p style="white-space: normal; widows: 1;">(三）若被保险人以参加社会医疗保险身份投保，但未以参加社会医疗保险身份就诊并结算的，则保险人根据保险单上单独约定的给付比例进行赔付。</p><p style="white-space: normal; widows: 1;">(四）若投保人和保险人另有约定，则对于被保险人实际发生的医疗费用，保险人按照另行约定并在保险合同中载明的条件和方式进行给付。</p><p style="white-space: normal; widows: 1;">4.责任免除</p><p style="white-space: normal; widows: 1;">主保险合同中所有责任免除条款（如适用）除第5条和第9条以外，均适用于本附加合同，若主保险合同中责任免除条款与本附加条款有相抵触之处，则应以本附加条款为准。</p><p style="white-space: normal; widows: 1;">任何在下列期间发生的或因下列情形之一导致被保险人支出医药费用的，保险人不承担保险金给付责任：</p><p style="white-space: normal; widows: 1;">1)投保人或被保险人的故意行为；或无论被保险人当时神志是否清醒，被保险人自致伤害或自杀（自伤或自杀时被保险人为无民事行为能力人除外）</p><p style="white-space: normal; widows: 1;">2)整形手术、美容或整容手术、变性手术及前述手术的并发症或因前述手术导致的医疗事故；</p><p style="white-space: normal; widows: 1;">3)被保险人患遗传性疾病，先天性畸形、变形或染色体异常（以世界卫生组织颁布的《疾病和有关健康问题的国际统计分类（ICD-10)》为准)；</p><p style="white-space: normal; widows: 1;">4)被保险人的既往病症（见释义）及其并发症；精神病、精神分裂症、心理疾病、性病等的治疗和康复所产生的费用；</p><p style="white-space: normal; widows: 1;">5)被保险人在非本附加条款约定的医疗机构就诊发生的医疗费用；</p><p style="white-space: normal; widows: 1;">6)被保险人在初次投保或非连续性投保的合同起保之日其一百二十天内接受扁桃腺、甲状腺、疝气、女性生殖系统疾病的检查与治疗；</p><p style="white-space: normal; widows: 1;">7)被保险人进行各种车辆表演、车辆竞赛；</p><p style="white-space: normal; widows: 1;">8)非因意外伤害而进行的牙科治疗或手术以及任何原因导致的牙齿修复或牙齿整形；</p><p style="white-space: normal; widows: 1;">9)非因意外伤害而进行的视力矫正或因矫正视力而作的眼科验光检查；屈光不正；</p><p style="white-space: normal; widows: 1;">10)被保险人怀孕（含宫外孕)、流产、分娩（含剖腹产)、避孕、绝育手术、治疗不孕不育症、人工受孕及由此导致的并发症；</p><p style="white-space: normal; widows: 1;">11)被保险人罹患艾滋病（AIDS)或感染艾滋病病毒（HIV)期间（上述定义，应按世界卫生组织所订的定义为准。若在被保险人的血液样本中发现上述病毒或其抗体，则认定病人已受该病毒感染)；</p><p style="white-space: normal; widows: 1;">12)被保险人因预防、康复、保健型或非疾病治疗类项目发生的医疗费用；眼镜、义齿、义眼、义肢、助听器等康复性器具；</p><p style="white-space: normal; widows: 1;">13)自本附加条款生效之日起30日内（续保无30日规定）罹患的疾病或出现的症状。</p><p style="white-space: normal; widows: 1;">5.保险金额和保险费</p><p style="white-space: normal; widows: 1;">保险金额是保险人承担给付保险金责任的最高限额。本附加条款的一般医疗保险金额和恶性肿瘤医疗保险金额由投保人、保险人双方约定，并在保险单中载明。保险金额一经确定，保险期间内不能进行变更。投保人应该按照合同约定向保险人交纳保险费。</p><p style="white-space: normal; widows: 1;">6.保险期间</p><p style="white-space: normal; widows: 1;">除另有约定外，本附加条款的“保险期间”同主保险合同一致。</p><p style="white-space: normal; widows: 1;">7.保险金申请</p><p style="white-space: normal; widows: 1;">保险金申请人向保险人申请给付保险金时，应提交以下材料。保险金申请人因特殊原因不能提供以下材料的，应提供其他合法有效的材料。保险金申请人未能提供有关材料，导致保险人无法核实该申请的真实性的，保险人对无法核实部分不承担给付保险金的责任。</p><p style="white-space: normal; widows: 1;">1)索赔申请表；</p><p style="white-space: normal; widows: 1;">2)保险单或相关保险凭证；</p><p style="white-space: normal; widows: 1;">3)被保险人户籍证明或者身份证明；</p><p style="white-space: normal; widows: 1;">4)医疗机构出具的诊断书、完整的门、急诊病历、出院小结及医疗费用原始收据；</p><p style="white-space: normal; widows: 1;">5)其它与本项索赔有关的证明文件；</p><p style="white-space: normal; widows: 1;">6)若保险金申请人委托他人申请等，还应提供授权委托书原件、委托人和受托人的身份证明等相关证明文件。在保险人的理赔审核过程中，保险人有权在合理的范围内对索赔的被保险人进行医疗检查。此外，保险人应有权</p><p style="white-space: normal; widows: 1;">在法律允许情况下，要求尸检。此类检验费用由保险人承担。在拒赔的情形下，保险人将承担因投保人提供索赔要求所必须的证明、收据、信息和证据而产生的费用（以人民币500元为限)。</p><p style="white-space: normal; widows: 1;">8.本附加条款效力终止</p><p style="white-space: normal; widows: 1;">本附加条款所附属的主保险合同效力终止，本附加条款效力即行终止。主保险合同无效，本附加条款亦无效。</p><p style="white-space: normal; widows: 1;">9.其他条款的适用</p><p style="white-space: normal; widows: 1;">本附加条款与主保险合同条款不一致之处，以本附加条款为准；本附加条款未尽之处，以主保险合同条款为准。</p><p style="white-space: normal; widows: 1;">10.释义</p><p style="white-space: normal; widows: 1;">10.1 境内</p><p style="white-space: normal; widows: 1;">指中华人民共和国大陆地区，不含香港特别行政区、澳门特别行政区及台湾省。</p><p style="white-space: normal; widows: 1;">10.2 既往病症</p><p style="white-space: normal; widows: 1;">指被保险人在保单生效前已患有的疾病，或存在任何足以引致普通人寻求诊断、医疗护理或医药治疗的症状、体征，或曾经医生</p><p style="white-space: normal; widows: 1;">推荐接受医药治疗或医疗意见。</p><p style="white-space: normal; widows: 1;">10.3 等待期</p><p style="white-space: normal; widows: 1;">指自本附加条款生效之日起30日（续保无30日规定)。在等待期内发生保险事故的，保险人不承担给付保险金的责任。</p><p style="white-space: normal; widows: 1;">10.4 医疗机构</p><p style="white-space: normal; widows: 1;">是指在中国境内（不包括香港、澳门、台湾地区）合法的二级或二级以上医院，或保险人认可的，根据法律合法成立、运营并符合以下标准的医疗机构：</p><p style="white-space: normal; widows: 1;">1)主要运营目的是以住院病人形式提供接待患病、伤者并为其提供医疗护理和治疗，</p><p style="white-space: normal; widows: 1;">2)在一名或若干医生的指导下为病人治疗，其中最少有一名合法执业资格的驻院医生驻诊，</p><p style="white-space: normal; widows: 1;">3)维持足够妥善的设备为病人提供医学诊断和治疗，并于机构内或由其管理的地方提供进行各种手术的设备，</p><p style="white-space: normal; widows: 1;">4)有合法执业的护士提供和指导二十四小时的全职护理服务。</p><p style="white-space: normal; widows: 1;">5)本附加条款中所指医疗机构不包括以下或类似的医疗机构：</p><p style="white-space: normal; widows: 1;">5.1)精神病院；</p><p style="white-space: normal; widows: 1;">5.2)老人院、疗养院、戒毒中心和戒酒中心；</p><p style="white-space: normal; widows: 1;">5.3)健康中心或天然治疗所、疗养或康复院。</p><p style="white-space: normal; widows: 1;">10.5 住院</p><p style="white-space: normal; widows: 1;">是指被保险人因意外伤害或疾病而入住医院之正式病房接受全日24小时监护治疗的过程，并正式办理入出院手续。但不包括下列情况：</p><p style="white-space: normal; widows: 1;">1)被保险人在医院的（门）急诊观察室、家庭病床（房）入住；</p><p style="white-space: normal; widows: 1;">2)被保险人在特需病房、外宾病房或其他不属于社会医疗保险范畴的高等级病房入住；</p><p style="white-space: normal; widows: 1;">3)被保险人入住康复科、康复病床或接受康复治疗；</p><p style="white-space: normal; widows: 1;">4)被保险人住院期间一天内未接受与入院诊断相关的检查和治疗，或一天内住院不满二十四小时；但遵医嘱到外院接受临时治疗的除外；</p><p style="white-space: normal; widows: 1;">5)被保险人住院体检；</p><p style="white-space: normal; widows: 1;">6)挂床住院及其他不合理的住院。挂床住院指办理正式住院手续的被保险人，在住院期间每日非24小时在床、在院。具体表现包括在住院期间连续若干日无任何治疗，只发生护理费、诊疗费、床位费等情况。</p><p style="white-space: normal; widows: 1;">10.6 必需且合理的住院医疗费用</p><p style="white-space: normal; widows: 1;">1)符合通常惯例：指与接受医疗服务所在地通行治疗规范、通行治疗方法、平均医疗费用价格水平一致的费用。对是否符合通常惯例由保险人根据客观、审慎、合理的原则进行审核；如果被保险人对审核结果有不同意见，可由双方认同的权威医学机构或者权威医学专家进行审核鉴定。</p><p style="white-space: normal; widows: 1;">2)医学必需：指医疗费用符合下列所有条件：</p><p style="white-space: normal; widows: 1;">2.1)治疗意外伤害或者疾病所必需的项目；</p><p style="white-space: normal; widows: 1;">2.2)不超过安全、足量治疗原则的项目；</p><p style="white-space: normal; widows: 1;">2.3)由医生开具的处方药；</p><p style="white-space: normal; widows: 1;">2.4)非试验性的、非研究性的项目；</p><p style="white-space: normal; widows: 1;">2.5)与接受治疗当地普遍接受的医疗专业实践标准一致的项目。</p><p style="white-space: normal; widows: 1;">对是否医学必需由保险人根据客观、审慎、合理的原则进行审核；如果被保险人对审核结果有不同意见，可由双方认同的权威医学机构或者权威医学专家进行审核鉴定。</p><p style="white-space: normal; widows: 1;">10.7 床位费</p><p style="white-space: normal; widows: 1;">指被保险人使用的医院床位的费用。</p><p style="white-space: normal; widows: 1;">10.8 膳食费</p><p style="white-space: normal; widows: 1;">指实际发生的、由医院提供的合理的、符合惯常标准的膳食费用，但不包括购买的个人用品。</p><p style="white-space: normal; widows: 1;">10.9 护理费</p><p style="white-space: normal; widows: 1;">指根据医嘱所示的护理等级确定的护理费用。</p><p style="white-space: normal; widows: 1;">10.10 检查检验费</p><p style="white-space: normal; widows: 1;">指实际发生的、以诊断疾病为目的，釆取必要的医学手段进行检查及检验而发生的合理的医疗费用，包括诊查费、妇检费、X光费、心电图费、B超费、脑电图费、内窥镜费、肺功能仪费、分子生化检验费和血、尿、便常规检验费等。</p><p style="white-space: normal; widows: 1;">10.11 治疗费</p><p style="white-space: normal; widows: 1;">指以治疗疾病为目的，提供必要的医学手段而发生的合理的治疗者的技术劳务费和医疗器械使用费，以及消耗品的费用，包括注射费、机疗费、理疗费、输血费、输氧费、体外反搏费等。</p><p style="white-space: normal; widows: 1;">10.12 药品费</p><p style="white-space: normal; widows: 1;">指实际发生的合理且必要的由医生开具的具有国家药品监督管理部门核发的药品批准文号或者进口药品注册证书、医药产品注册证书的国产或进口药品的费用。但不包括营养补充类药品，免疫功能调节类药品，美容及减肥类药品，预防类药品，以及下列中药类药品：</p><p style="white-space: normal; widows: 1;">(1)主要起营养滋补作用的单方、复方中药或中成药品，如花旗参，冬虫草，白糖参，朝鲜红参，玳瑁，蛤蚧，珊瑚，狗宝，红参，琥珀，灵芝，羚羊角尖粉，马宝，玛瑙，牛黄，麝香，西红花，血竭，燕窝，野山参，移山参，珍珠（粉)，紫河车，阿胶，阿胶珠，血宝胶囊，红桃K口服液，十全大补丸，十全大补膏等；（2)部分可以入药的动物及动物脏器，如鹿茸，海马，胎盘，鞭，尾，筋，骨等；（3)用中药材和中药饮片炮制的各类酒制剂等。</p><p style="white-space: normal; widows: 1;">10.13 手术费</p><p style="white-space: normal; widows: 1;">指当地卫生行政部门规定的手术项目的费用。包括手术室费、麻醉费、手术监测费、手术材料费、术中用药费、手术设备费；若因器官移植而发生的手术费用，不包括器官本身的费用和获取器官过程中的费用。</p><p style="white-space: normal; widows: 1;">10.14 恶性肿瘤</p><p style="white-space: normal; widows: 1;">指恶性细胞不受控制的进行性增长和扩散，浸润和破坏周围正常组织，可以经血管、淋巴管和体腔扩散转移到身体其它部位的疾病。经病理学检查结果明确诊断，临床诊断属于世界卫生组织《疾病和有关健康问题的国际统计分类》（ICD-10)的恶性肿瘤范畴。</p><p style="white-space: normal; widows: 1;">10.15 化学疗法</p><p style="white-space: normal; widows: 1;">指针对于恶性肿瘤的化学治疗。化疗是使用医学界公认的化疗药物以杀死癌细胞、抑制癌细胞生长繁殖为目的而进行的治疗。本附加条款所指的化疗为被保险人根据医嘱，在医院进行的静脉注射化疗。</p><p style="white-space: normal; widows: 1;">10.16 放射疗法</p><p style="white-space: normal; widows: 1;">指针对恶性肿瘤的放射治疗。放疗是使用各种不同能量的射线照射肿瘤组织，以抑制和杀灭癌细胞为目的而进行的治疗。本附加条款所指的放疗为被保险人根据医嘱，在医院的专门科室进行的放疗。</p><p style="white-space: normal; widows: 1;">10.17 肿瘤免疫疗法</p><p style="white-space: normal; widows: 1;">指应用免疫学原理和方法，使用肿瘤免疫治疗药物提高肿瘤细胞的免疫原性和对效应细胞杀伤的敏感性，激发和增强机体抗肿瘤免疫应答，并应用免疫细胞和效应分子输注宿主体内，协同机体免疫系统杀伤肿瘤、抑制肿瘤生长。本附加条款所指的肿瘤免疫治疗药物需符合法律、法规要求并经过国家食品药品监管总局批准用于临床治疗。</p><p style="white-space: normal; widows: 1;">10.18 肿瘤内分泌疗法</p><p style="white-space: normal; widows: 1;">指针对于恶性肿瘤的内分泌疗法，用药物抑制激素生成和激素反应，杀死癌细胞或抑制癌细胞的生长。本附加条款所指的内分泌治疗药物需符合法律、法规要求并经过国家食品药品监管总局批准用于临床治疗。</p><p style="white-space: normal; widows: 1;">10.19 肿瘤靶向疗法</p><p style="white-space: normal; widows: 1;">指在细胞分子水平上，针对已经明确的致癌点来设计相应的靶向治疗药物，利用具有一定特异性的载体，将药物或其他杀伤肿瘤细胞的活性物质选择性地运送到肿瘤部位攻击癌细胞的疗法。本附加条款所指的靶向治疗药物需符合法律、法规要求并经过国家食品药品监管总局批准用于临床治疗。</p><p><br></p>',

        //赔款流程
        peikuanliucheng: '<p style="white-space: normal; widows: 1;">一、理赔流程</p><p style="white-space: normal; widows: 1;">1、被保险人在发生保险事故后，向快保科技400-818-9191进行报案或者拨打安联财产保险全国统一客服热线400-800-2020进行报案。接到报案后客服人员将指导进行报案，并详细询问案情，包括：时间、地点、出险原因、伤亡情况等信息。</p><p style="white-space: normal; widows: 1;">2、被保险人提交理赔资料：理赔申请表及其他支持文件，并将理赔资料寄到安联保险理赔部。</p><p style="white-space: normal; widows: 1;">3、安联保险公司核实有关文件。</p><p style="white-space: normal; widows: 1;">4、理赔资料齐全并符合赔付标准后，理赔款将赔付至被保险人指定的银行账户。</p><p style="white-space: normal; widows: 1;">二、理赔资料</p><p style="white-space: normal; widows: 1;">详细理赔所需资料见快保“个人中心-我的理赔-理赔服务<span style="widows: 1;">”</span>模块。</p><p><br></p>',
        //常见问题
        changjianwenti: '<p style="white-space: normal;"><strong>Q1:臻爱医疗的续保流程是怎样的？</strong></p><p style="white-space: normal;">A1:本合同期满，投保人可向保险人申请连续投保本合同，续保没有等待期，不需要重新填写健康告知。本合同为非保证续保合同，投保人连续投保本合同须经保险人审核同意。续保时保险人有权根据医疗费 用水平变化、本险种整体经营状况及被保险人年龄对费率等进行调整。在投保人接受费率等调整的前提下，保险人方可为投保人办理连续投保手续。</p><p style="white-space: normal;">对于符合续保条件的客户，我们也会按正常的续保流程，每月发送续保通知书/续保清单给到渠道。</p><p style="white-space: normal;"><br></p><p style="white-space: normal;"><strong>Q2：如续保通知书发送后，客户才检查出恶性肿瘤疾病，是否能继续承保？</strong></p><p style="white-space: normal;">A2：自本续保通知书发出日至续保保单生效日期间，若被保险人的风险状况改变，投保人/ 保险人应及时通知，保险公司有权修改续保条件/价格或撤销本续保通知书。</p><p style="white-space: normal;"><br></p><p style="white-space: normal;"><strong>Q3：如保单即将到期时确诊，住院产生医疗费用，那么跨保险年度住院是否赔付医疗费用？</strong></p><p style="white-space: normal;">A3：关于被保险人跨保险年度住院所产生的医疗费用属于保险责任范围内的，我司将按保险条款约定执行如下：</p><p style="white-space: normal;">1. 如被保险人正常续保或条件续保，其在保单终保时间前产生的住院医疗费用按当年度保单保险责任予以给付；其在保单终保时间后产生的住院医疗费用按续保年度保单保险责任予以给付。</p><p style="white-space: normal;">2．如被保险人不能续保，对于其住院产生的医疗费用属于保险责任范围内的，依照当年度保单保险条款约定予以给付。</p><p style="white-space: normal;"><br></p><p style="white-space: normal;"><strong>Q4:如果客户有社保，以有社保身份购买这个产品，但是实际就医过程中并没有使用社保，如何理赔？</strong></p><p style="white-space: normal;">A4:若被保险人以有社会医疗保险身份投保，但未以社会医疗保险身份就诊并结算的，本保险按照应赔付金额的60%进行赔付。举个栗子：</p><p style="white-space: normal;">小安有社保，在**人寿和安联财险分别有住院保险。某次住院及特殊门诊花费合理费用5.6万，其中由于异地就医并没有使用社保，**人寿报销0.8万，小安可到安联报销以下金额：[5.6-0.8-(1-0.8)]*0.6=2.76万，按赔付金额的60%进行赔付。本次医疗费用，小安自付部分为：5.6-0.8-2.76=2.04万</p><p style="white-space: normal;">&nbsp;</p><p style="white-space: normal;"><strong>Q5:如果客户投保时无社保，投保了无社保的臻爱计划，但是半年后客户需要理赔的时候已经有社保，是否可以直接提交理赔而不通过社保？</strong></p><p style="white-space: normal;">A5：理赔时客户如果已有参保，即使购买的无社保计划，仍然需要按照实际情况先申报社保。如果没有经过社保，那么会按60%的赔付处理。</p><p style="white-space: normal;">&nbsp;</p><p style="white-space: normal;"><strong>Q6: 如果客户是无社保的，2个月后才会购买社保，是否可以买有社保的计划？</strong></p><p style="white-space: normal;">A6：如现在投保就购买无社保的计划，或者2个月之后有社保之后再购买有社保的计划。</p><p style="white-space: normal;">&nbsp;</p><p style="white-space: normal;"><strong>Q7:如果客户是无社保的，但是购买了有社保的计划，已经过了30日的疾病等待期，等待期内没有任何理赔事项。</strong></p><p style="white-space: normal;">A7:建议客户退保（按未满期净保费折算），重新购买无社保的计划,疾病住院或特殊门诊仍有30天等待期。</p><p><br></p>',

        money: 152,
        job1: [],
        job2: [],
        job3: [],
        //投保人信息验证
        policyholder:{
            name: null,
            phone: null,
            email: null,
            cardId: null
        },
        //被保人信息验证
        policyholdered:{
            relation: 0,
            name: null,
            cardId: null,
            phone: null,
            work1: 0,
            work2: 0,
            work3: 0,
            hasSocialSecurity: "has",
            minAge: 16,
            maxAge: 20,
            minDay: null,
            ensurePlan: 1,
            searchCode: "ZAAMIPS(SI)",
        },


        ui : {
            product: ".product",
            productDetail: ".product-detail",
            productTextContent: ".product-text-content",
            productPolicyholder: "#product-policyholder",
            productTextNav : ".product-text-nav",
            ensurePlan: "#ensurePlan",                      //保障计划选择列表
            hasSocialSecurity: "#hasSocialSecurity",        //有无社保选择列表
            ensureAge: "#ensureAge",                        //保障年龄选择列表
            dutyTitleRight: ".duty_title_right",                        //保障计划
            dutyNum1: "#duty_num_1",
            dutyNum2: "#duty_num_2",
            dutyNum3: "#duty_num_3",
            productBuy: ".product-buy",         //点击购买

            policyholderName: "#policyholder-name",    //投保人姓名
            policyholderPhone: "#policyholder-phone",  //投保人手机
            policyholderEmail: "#policyholder-email",  //投保人邮箱
            policyholderId: "#policyholder-id",        //投保人身份证

            policyholderedRelation: "#policyholdered-relation",    //与被保人关系
            policyholderedName: "#policyholdered-name",            //被保人姓名
            policyholderedId: "#policyholdered-id",                //被保人身份证
            policyholderedPhone: "#policyholdered-phone",          //被保人手机
            policyholderedWork1: "#policyholdered-work-1",        //被保人一级职业
            policyholderedWork2: "#policyholdered-work-2",        //被保人一级职业
            policyholderedWork3: "#policyholdered-work-3",        //被保人一级职业

            toBuy: "#to-buy",      //确定购买

        },
        events : {
            "tap @ui.healthTell1": "onclickHealthTell1",

            "tap @ui.productTextNav": "onClickProductTextNav",  
            "change @ui.ensurePlan": "onChangEnsurePlan", 
            "change @ui.hasSocialSecurity": "onChangeHasSocialSecurity",
            "change @ui.ensureAge": "onchangeEnsureAge",
            "tap @ui.productBuy": "onClickProductBuy",
            //投保人
            "blur @ui.policyholderName": "onBlurPolicyholderName",
            "blur @ui.policyholderPhone": "onBlurPolicyholderPhone",
            "blur @ui.policyholderId": "onBlurPolicyholderId",
            "blur @ui.policyholderEmail": "onBlurPolicyholderEmail",
            //被保人
            "change @ui.policyholderedRelation": "onChangePolicyholderedRelation",
            "blur @ui.policyholderedName": "onBlurPolicyholderedName",
            "blur @ui.policyholderedId": "onBlurPolicyholderedId",
            "blur @ui.policyholderedPhone": "onBlurPolicyholderedPhone",
            "change @ui.policyholderedWork1": "onChangePolicyholderedWork1",
            "tap @ui.policyholderedWork2": "onClickPolicyholderedWork2",
            "change @ui.policyholderedWork2": "onChangePolicyholderedWork2",
            "tap @ui.policyholderedWork3": "onClickPolicyholderedWork3",
            "change @ui.policyholderedWork3": "onChangePolicyholderedWork3",
            //确定购买
            "tap @ui.toBuy": "onClickTobuy",

        },
        calMoney: function(minAge, maxAge, hasSocialSecurity, ensurePlan){
            if(0<=minAge&&maxAge<=5){
                if(hasSocialSecurity=="has"&&ensurePlan=="1"){
                    this.money = 690;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="1"){
                    this.money = 1377;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="2"){
                    this.money = 818;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="2"){
                    this.money = 1573;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="3"){
                    this.money = 945
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="3"){
                    this.money = 1769             
                }
            }
            if(6<=minAge&&maxAge<=10){
                if(hasSocialSecurity=="has"&&ensurePlan=="1"){
                    this.money = 281;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="1"){
                    this.money = 520;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="2"){
                    this.money = 368;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="2"){
                    this.money = 630;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="3"){
                    this.money = 454
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="3"){
                    this.money = 741             
                }
            }
            if(11<=minAge&&maxAge<=15){
                if(hasSocialSecurity=="has"&&ensurePlan=="1"){
                    this.money = 165;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="1"){
                    this.money = 277;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="2"){
                    this.money = 240;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="2"){
                    this.money = 363;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="3"){
                    this.money = 315
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="3"){
                    this.money = 449             
                }
            }
            if(16<=minAge&&maxAge<=20){
                if(hasSocialSecurity=="has"&&ensurePlan=="1"){
                    this.money = 152;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="1"){
                    this.money = 248;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="2"){
                    this.money = 225;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="2"){
                    this.money = 331;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="3"){
                    this.money = 299
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="3"){
                    this.money = 414             
                }
            }
            if(21<=minAge&&maxAge<=25){
                if(hasSocialSecurity=="has"&&ensurePlan=="1"){
                    this.money = 206;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="1"){
                    this.money = 360;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="2"){
                    this.money = 285;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="2"){
                    this.money = 454;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="3"){
                    this.money = 365
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="3"){
                    this.money = 549             
                }
            }
            if(26<=minAge&&maxAge<=30){
                if(hasSocialSecurity=="has"&&ensurePlan=="1"){
                    this.money = 269;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="1"){
                    this.money = 493;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="2"){
                    this.money = 354;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="2"){
                    this.money = 601;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="3"){
                    this.money = 440
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="3"){
                    this.money = 790             
                }
            }
            if(31<=minAge&&maxAge<=35){
                if(hasSocialSecurity=="has"&&ensurePlan=="1"){
                    this.money = 344;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="1"){
                    this.money = 689;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="2"){
                    this.money = 437;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="2"){
                    this.money = 816;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="3"){
                    this.money = 529
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="3"){
                    this.money = 944             
                }
            }
            if(36<=minAge&&maxAge<=40){
                if(hasSocialSecurity=="has"&&ensurePlan=="1"){
                    this.money = 437;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="1"){
                    this.money = 1066;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="2"){
                    this.money = 539;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="2"){
                    this.money = 1165;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="3"){
                    this.money = 641
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="3"){
                    this.money = 1325             
                }
            }
            if(41<=minAge&&maxAge<=45){
                if(hasSocialSecurity=="has"&&ensurePlan=="1"){
                    this.money = 521;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="1"){
                    this.money = 1402;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="2"){
                    this.money = 632;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="2"){
                    this.money = 1601;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="3"){
                    this.money = 742
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="3"){
                    this.money = 1800             
                }
            }
            if(46<=minAge&&maxAge<=50){
                if(hasSocialSecurity=="has"&&ensurePlan=="1"){
                    this.money = 698;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="1"){
                    this.money = 2130;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="2"){
                    this.money = 827;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="2"){
                    this.money = 2402;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="3"){
                    this.money = 955
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="3"){
                    this.money = 2673             
                }
            }
            if(51<=minAge&&maxAge<=55){
                if(hasSocialSecurity=="has"&&ensurePlan=="1"){
                    this.money = 893;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="1"){
                    this.money = 2848;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="2"){
                    this.money = 1041;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="2"){
                    this.money = 3191;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="3"){
                    this.money = 1189
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="3"){
                    this.money = 3534             
                }
            }
            if(56<=minAge&&maxAge<=60){
                if(hasSocialSecurity=="has"&&ensurePlan=="1"){
                    this.money = 1169;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="1"){
                    this.money = 3365;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="2"){
                    this.money = 1344;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="2"){
                    this.money = 4090;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="3"){
                    this.money = 1520
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="3"){
                    this.money = 4515             
                }
            }
            if(61<=minAge&&maxAge<=65){
                if(hasSocialSecurity=="has"&&ensurePlan=="1"){
                    this.money = 1597;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="1"){
                    this.money = 4938;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="2"){
                    this.money = 1815;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="2"){
                    this.money = 5491;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="3"){
                    this.money = 2033
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="3"){
                    this.money = 6043             
                }
            }
            if(66<=minAge&&maxAge<70){
                if(hasSocialSecurity=="has"&&ensurePlan=="1"){
                    this.money = 2045;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="1"){
                    this.money = 6329;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="2"){
                    this.money = 2308;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="2"){
                    this.money = 7072;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="3"){
                    this.money = 2571
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="3"){
                    this.money = 7712             
                }
            }
            if(71<=minAge&&maxAge<=75){
                if(hasSocialSecurity=="has"&&ensurePlan=="1"){
                    this.money = 2709;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="1"){
                    this.money = 8389;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="2"){
                    this.money = 3038;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="2"){
                    this.money = 9286;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="3"){
                    this.money = 3368
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="3"){
                    this.money = 10184             
                }
            }
            if(76<=minAge&&maxAge<=80){
                if(hasSocialSecurity=="has"&&ensurePlan=="1"){
                    this.money = 3360;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="1"){
                    this.money = 1034;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="2"){
                    this.money = 3754;
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="2"){
                    this.money = 11432;
                }
                if(hasSocialSecurity=="has"&&ensurePlan=="3"){
                    this.money = 4149
                }
                if(hasSocialSecurity=="no"&&ensurePlan=="3"){
                    this.money = 12525             
                }
            }
        },
        setSearchCode: function(ensurePlan, hasSocialSecurity){
            if(ensurePlan=="1" && hasSocialSecurity=="has"){
                return "ZAAMIPS(SI)";
            }
            if(ensurePlan=="1" && hasSocialSecurity=="no"){
                return "ZAAMIPS(NSI)";
            }
            if(ensurePlan=="2" && hasSocialSecurity=="has"){
                return "ZAAMIPU(SI)";
            }
            if(ensurePlan=="2" && hasSocialSecurity=="no"){
                return "ZAAMIPU(NSI)";
            }
            if(ensurePlan=="3" && hasSocialSecurity=="has"){
                return "ZAAMIPH(SI)";
            }
            if(ensurePlan=="3" && hasSocialSecurity=="no"){
                return "ZAAMIPH(NSI)";
            }
        },
        onclickHealthTell1: function(e){
            e.stopPropagation();
        },
        onClickTobuy: function(e){
            e.stopPropagation();
            e.preventDefault();

            console.log(this.policyholder,"ffff");
            console.log(this.policyholdered,"gggggg");
            if(!this.policyholderDone()){
                return;
            }
            if(!this.policyholderedDone()){
                return;
            }


            if($("input[name=health-tell-1]:checked").val()=="yes"){
                alert("您的投保不符合健康条件第一条");
                return;
            }
            if($("input[name=health-tell-2]:checked").val()=="yes"){
                alert("您的投保不符合健康条件第二条");
                return;
            }
            if($("input[name=health-tell-3]:checked").val()=="yes"){
                alert("您的投保不符合健康条件第三条");
                return;
            }
            if($("input[name=health-tell-4]:checked").val()=="yes"){
                alert("您的投保不符合健康条件第四条");
                return;
            }
            if($("input[name=health-tell-5]:checked").val()=="yes"){
                alert("您的投保不符合健康条件第五条");
                return;
            }
            if($("input[name=health-tell-6]:checked").val()=="yes"){
                alert("您的投保不符合健康条件第六条");
                return;
            }
            if($("input[name=health-tell-7]:checked").val()=="yes"){
                alert("您的投保不符合健康条件第七条");
                return;
            }
            if($("input[name=health-tell-8]:checked").val()=="yes"){
                alert("您的投保不符合健康条件第八条");
                return;
            }
            console.log(this.policyholder);
            console.log(this.policyholdered);
        },
        policyholderedDone: function(){
            if(this.policyholdered.relation == "0"){
                alert("未选择被保人与投保人关系");
                return false;
            }
            if(!this.policyholdered.name){
                alert("被保人姓名不正确");
                return false;
            }
            if(!this.policyholdered.cardId){
                alert("被保人身份证号码不正确");
                return false;
            }else{
                var policyholderedBirthStr = utils.getBirth(this.policyholdered.cardId);
                var policyholderBirthStr = utils.getBirth(this.policyholder.cardId);
                var policyholderedAge = utils.getAge(policyholderedBirthStr);
                var policyholderAge = utils.getAge(policyholderBirthStr); 
                if(policyholderedAge<this.policyholdered.minAge || policyholderedAge>this.policyholdered.maxAge){
                    alert("被保人的年龄与您选择的投保方案不符");
                    return false;
                }
                if((this.policyholdered.relation=="2"||this.policyholdered.relation=="3") && policyholderedAge<=policyholderAge){
                    alert("被保人与投保人的关系和年龄不相称");
                    return false;
                }
                if((this.policyholdered.relation=="7"||this.policyholdered.relation=="8") && policyholderedAge>=policyholderAge){
                    alert("被保人与投保人的关系和年龄不相称");
                    return false;
                }
            }
            if(!this.policyholdered.phone){
                alert("被保人手机号码不正确");
                return false;
            }
            if(this.policyholdered.work1 == "0"){
                alert("请选择被保人一级职业");
                return false;
            }
            if(this.policyholdered.work2 == "0"){
                alert("请选择被保人二级职业");
                return false;
            }
            if(this.policyholdered.work3 == "0"){
                alert("请选择被保人三级职业");
                return false;
            }
            return true;
        },
        onChangePolicyholderedWork3: function(e){
            e.stopPropagation();
            e.preventDefault();
            this.policyholdered.work3 = this.ui.policyholderedWork3[0].value;

        },
        onClickPolicyholderedWork3: function(e){
            e.stopPropagation();
            if(this.policyholdered.work2=="0"){
                e.preventDefault();
                alert("请选择上一级职业");
            }
        },
        onChangePolicyholderedWork2: function(e){
            e.stopPropagation();
            e.preventDefault();

            this.policyholdered.work2 = this.ui.policyholderedWork2[0].value;
            if(this.policyholdered.work2=="0"){
                this.ui.policyholderedWork3[0].value = "0";
                this.policyholdered.work3 = "0";
                this.job3 = [];
            }
            for(var i=0; i<this.job2.length; i++){
                if(this.job2[i].jobcode == this.policyholdered.work2){
                    this.job3 = this.job2[i].childJobs;
                    break;
                }else{
                    this.job3 = [];
                }
            }
            var job3Html = '<option value="0">请选择</option>';
            for(var j=0; j<this.job3.length; j++){
                job3Html += '<option value="'+this.job3[j].jobcode+'">'+this.job3[j].jobName1||this.job3[j].jobName2+'</option>';
            }
            this.ui.policyholderedWork3.html(job3Html);
        },
        onClickPolicyholderedWork2: function(e){
            e.stopPropagation();
            if(this.policyholdered.work1=="0"){
                e.preventDefault();
                alert("请选择上一级职业");
            }
        },
        onChangePolicyholderedWork1: function(e){
            e.stopPropagation();
            e.preventDefault();
            this.policyholdered.work1 = this.ui.policyholderedWork1[0].value;
            if(this.policyholdered.work1=="0"){
                this.ui.policyholderedWork2[0].value = "0";
                this.policyholdered.work2 = "0";
                this.job2 = [];
                this.ui.policyholderedWork3[0].value = "0";
                this.policyholdered.work3 = "0";
                this.job3 = [];
            }
            for(var i=0; i<this.job1.length; i++){
                if(this.job1[i].jobcode == this.policyholdered.work1){
                    this.job2 = this.job1[i].childJobs;

                    break;
                }else{
                    this.job2 = [];
                }
            }
            var job2Html = '<option value="0">请选择</option>';
            for(var j=0; j<this.job2.length; j++){
                job2Html += '<option value="'+this.job2[j].jobcode+'">'+this.job2[j].jobName1||this.job2[j].jobName2+'</option>';
            }
            this.ui.policyholderedWork2.html(job2Html);

        },
        //被保人手机
        onBlurPolicyholderedPhone: function(e){
            e.stopPropagation();
            var phone = e.target.value;
            if(!phone){
                this.policyholdered.phone = null;
                return;
            }
            if(utils.testPhone(phone)){
                console.log("手机号合法");
                this.policyholdered.phone = phone;
            }else{
                alert("手机号码不正确");
                console.log("手机号码不正确");
                this.policyholdered.phone = null;
            }
        },
        //被保人身份证
        onBlurPolicyholderedId: function(e){
            e.stopPropagation(e);
            var cardId = e.target.value;
            if(!cardId){
                this.policyholdered.cardId = null;
                return;
            }
            if(utils.IdentityCodeValid(cardId)){
                console.log("身份证合法");
                this.policyholdered.cardId = cardId;
            }else{
                alert("身份证号码不正确");
                console.log("身份证号码不正确");
                this.policyholdered.cardId = null;
            }
        },
        //被保人姓名
        onBlurPolicyholderedName: function(e){
            e.stopPropagation();
            var name = e.target.value;
            if(!name){
                this.policyholdered.name = null;
                return;
            }
            this.policyholdered.name = name;
        },

        //改变了与投保人关系
        onChangePolicyholderedRelation: function(e){
            e.stopPropagation();
            e.preventDefault();
            if(this.policyholderDone()){
                if(this.ui.policyholderedRelation[0].value == "1"){
                    this.ui.policyholderedName.val(this.policyholder.name);
                    this.ui.policyholderedName.attr("readonly", "readonly");
                    this.policyholdered.name = this.policyholder.name;
                    this.ui.policyholderedPhone.val(this.policyholder.phone);
                    this.ui.policyholderedPhone.attr("readonly", "readonly");
                    this.policyholdered.phone = this.policyholder.phone;
                    this.ui.policyholderedId.val(this.policyholder.cardId);
                    this.ui.policyholderedId.attr("readonly", "readonly");
                    this.policyholdered.cardId = this.policyholder.cardId;

                }else{
                    this.ui.policyholderedName.removeAttr("readonly");
                    this.ui.policyholderedPhone.removeAttr("readonly");
                    this.ui.policyholderedId.removeAttr("readonly");
                }

            }else{
                console.log("投保人信息不正确");
            }
            this.policyholdered.relation = this.ui.policyholderedRelation[0].value;
        },

        policyholderDone: function(){
            if(!this.policyholder.name){
                alert("投保人姓名不正确");
                return false;
            }
            if(!this.policyholder.phone){
                alert("投保人手机号码不正确");
                return false;
            }
            if(!this.policyholder.email){
                alert("投保人邮箱不正确");
                return false;
            }
            if(!this.policyholder.cardId){
                alert("投保人身份证号码不正确");
                return false;
            }
            return true;
        },

        //身份证失去焦点
        onBlurPolicyholderId: function(e){
            e.stopPropagation(e);
            var cardId = e.target.value;
            if(!cardId){
                this.policyholder.cardId = null;
                return;
            }
            if(utils.IdentityCodeValid(cardId)){
                console.log("身份证号码合法");
                this.policyholder.cardId = cardId;
            }else{
                alert("身份证号码不正确a");
                console.log("身份证号码不正确");
                this.policyholder.cardId = null;
            }
        },
        //邮箱失去焦点
        onBlurPolicyholderEmail: function(e){
            var email = e.target.value;
            if(!email){
                this.policyholder.email = null;
                return;
            }
            if(utils.testEmail(email)){
                console.log("邮箱合法");
                this.policyholder.email = email;
            }else{
                alert("邮箱不正确a");
                console.log("邮箱不正确a");
                this.policyholder.email = null;
            }
        },
        //手机号码失去焦点
        onBlurPolicyholderPhone: function(e){
            e.stopPropagation();
            var phone = e.target.value;
            if(!phone){
                this.policyholder.phone = null;
                return;
            }
            if(utils.testPhone(phone)){
                this.policyholder.phone = phone;
                console.log("手机号合法")
            }else{
                alert("手机号码不正确a");
                console.log("手机号码不正确a");
                this.policyholder.phone = null;
            }
            // console.log(e.target.value);
        },
        //姓名失去焦点
        onBlurPolicyholderName: function(e){
            e.stopPropagation(e);
            var name = e.target.value;
            // console.log(name);
            if(!name){
                this.policyholder.name = null;
                return;
            }
            this.policyholder.name = name;
        },
        //事件添加
        onClickProductTextNav: function(e){
            e.preventDefault();
            e.stopPropagation();
            var targetObj = $(e.target);
            var targetParent = targetObj.parent();
            var targetObjId = targetObj.attr("id");
            for(var i=0; i<targetParent.children().length; i++){
                $(targetParent.children()[i]).removeClass("puoduct-text-item-select");
            }
            this.ui.productTextContent.html("");
            if(targetObjId=="product-text-1"){
                targetObj.addClass("puoduct-text-item-select");
                this.ui.productTextContent.html(this.toubaoxuzhi);
            }
            if(targetObjId=="product-text-2"){
                targetObj.addClass("puoduct-text-item-select");
                this.ui.productTextContent.html(this.tiaokuanziliao);
            }
            if(targetObjId=="product-text-3"){
                targetObj.addClass("puoduct-text-item-select");
                this.ui.productTextContent.html(this.peikuanliucheng);
            }
            if(targetObjId=="product-text-4"){
                targetObj.addClass("puoduct-text-item-select");
                this.ui.productTextContent.html(this.changjianwenti);
            }
        },
        onChangEnsurePlan: function(e){
            e.stopPropagation();
            this.ui.dutyTitleRight.html(this.ui.ensurePlan.find("option:selected").text());

            this.policyholdered.ensurePlan = this.ui.ensurePlan[0].value;

            this.ui.dutyNum1.html(10*this.ui.ensurePlan[0].value+"万");
            this.ui.dutyNum2.html(100*this.ui.ensurePlan[0].value+"万");
            this.ui.dutyNum3.html(100*this.ui.ensurePlan[0].value+"万");
            this.policyholdered.searchCode = this.setSearchCode(this.policyholdered.ensurePlan,this.policyholdered.hasSocialSecurity);
            this.calMoney(this.policyholdered.minAge, this.policyholdered.maxAge, this.policyholdered.hasSocialSecurity, this.policyholdered.ensurePlan);

            $(".product-price").html("价格："+this.money+"元");

        },
        onChangeHasSocialSecurity: function(e){
            e.stopPropagation();

            this.policyholdered.hasSocialSecurity = this.ui.hasSocialSecurity[0].value;
            this.policyholdered.searchCode = this.setSearchCode(this.policyholdered.ensurePlan,this.policyholdered.hasSocialSecurity);
            this.calMoney(this.policyholdered.minAge, this.policyholdered.maxAge, this.policyholdered.hasSocialSecurity, this.policyholdered.ensurePlan);
            $(".product-price").html("价格："+this.money+"元");

        },
        onchangeEnsureAge: function(e){
            e.stopPropagation();
            var ensureAge = JSON.parse(this.ui.ensureAge[0].value);
            this.policyholdered.maxAge = ensureAge.maxAge;
            this.policyholdered.minAge = ensureAge.minAge;
            this.policyholdered.minDay = ensureAge.minday;
            this.calMoney(this.policyholdered.minAge, this.policyholdered.maxAge, this.policyholdered.hasSocialSecurity, this.policyholdered.ensurePlan);

            $(".product-price").html("价格："+this.money+"元");
        },
        onClickProductBuy: function(e){
            e.stopPropagation();

            this.ui.productDetail.scrollTop(this.ui.productPolicyholder[0].offsetTop-88);
        },
        

        /**初始化**/
        initialize : function(){

        },
        //在开始渲染模板前执行，此时当前page没有添加到document
        onBeforeRender : function(){

        },
        //渲染完模板后执行,此时当前page没有添加到document
        onRender : function(){
        },
        show : function(){

            homeModel.getWork(function(data){
                console.log(data,"请求职业数据成功");
                if(data.status == "0"){
                    this.job1 = data.jobCategorys;
                    var job1Html = '<option value="0">请选择</option>';
                    for(var i=0; i<this.job1.length;i++){
                        job1Html += '<option value="'+this.job1[i].jobcode+'">'+this.job1[i].jobName1+'</option>';
                    }
                    this.ui.policyholderedWork1.html(job1Html);
                }else{
                    console.log("请求成功，但服务器返回数据错误");
                }
            },function(erro){
                console.log(erro,"请求职业数据失败");
            });
        var search = window.location.search;
        if(search.indexOf("?")>=0){
            var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+ utils.config.wxappid +'&redirect_uri='+ encodeURIComponent(window.location.href) +'&response_type=code&scope=snsapi_base#wechat_redirect';
            window.location.href = url;
        }else{
            
        }
        // window.location.href = url;

            // data={
            //     status: 0,
            //     errorMessages: null,
            //     jobCategorys:[
            //         {
            //             jobId: 9,
            //             jobcode: "B001",
            //             jobClassId: 1,
            //             jobName1: "玻璃制造业",
            //             jobName2: null,
            //             parentJobCode: null,
            //             isSpecial: "N",
            //             childJobs:[
            //                 {
            //                     jobId: 16,
            //                     jobcode: "B001001",
            //                     jobClassId: 1,
            //                     jobName1: "技师",
            //                     jobName2: null,
            //                     parentJobCode: "B001",
            //                     isSpecial: "N",
            //                     childJobs:[
            //                         {
            //                             jobId: 26,
            //                             jobcode: "B001001001",
            //                             jobClassId: 1,
            //                             jobName1: "切割技师",
            //                             jobName2: null,
            //                             parentJobCode: "B001001",
            //                             isSpecial: "N",
            //                             childJobs: []
            //                         }
            //                     ]
            //                 }
            //             ]
            //         },
            //         {
            //             jobId: 9,
            //             jobcode: "B002",
            //             jobClassId: 1,
            //             jobName1: "玻璃制造业2",
            //             jobName2: null,
            //             parentJobCode: null,
            //             isSpecial: "N",
            //             childJobs:[
            //                 {
            //                     jobId: 16,
            //                     jobcode: "B002002",
            //                     jobClassId: 1,
            //                     jobName1: "技师2",
            //                     jobName2: null,
            //                     parentJobCode: "B002",
            //                     isSpecial: "N",
            //                     childJobs:[
            //                         {
            //                             jobId: 26,
            //                             jobcode: "B002002002",
            //                             jobClassId: 1,
            //                             jobName1: "切割技师2",
            //                             jobName2: null,
            //                             parentJobCode: "B002002",
            //                             isSpecial: "N",
            //                             childJobs: []
            //                         }
            //                     ]
            //                 }
            //             ]
            //         }
            //     ]
            // };

            // if(data.status == "0"){
            //     this.job1 = data.jobCategorys;
            //     var job1Html = '<option value="0">请选择</option>';
            //     // console.log(job1Html);
            //     for(var i=0; i<this.job1.length;i++){
            //         job1Html += '<option value="'+this.job1[i].jobcode+'">'+this.job1[i].jobName1+'</option>';
            //     }
                

            //     this.ui.policyholderedWork1.html(job1Html);
            // }

            // } else{
            //     console.log("数据有问题");
            // }
            this.ui.productTextContent.html(this.toubaoxuzhi);
            
        },

        //页间动画已经完成，当前page已经加入到document
        pageIn : function(){
            var index=this.ui.ensurePlan.selectedIndex ; 
        
        },

        /**页面关闭时调用，此时不会销毁页面**/
        close : function(){
        },

        //当页面销毁时触发
        onDestroy : function(){
//            console.log("footer destroy");
        }

    });
});