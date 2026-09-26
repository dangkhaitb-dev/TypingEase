/* data/words/zh.js — kho từ tiếng Trung (giản thể) cho khoá /zh/.
 *
 * Nạp hai đường, nên nó là biến toàn cục của trình duyệt chứ không phải module:
 *   - Node, qua `new Function('window', src)` — scripts/build-course.js, validate-lessons.js
 *   - Trình duyệt, qua <script src> — weak-keys.js, lấy làm kho luyện phím yếu
 *
 * VÌ SAO LÀ PINYIN. Người nói tiếng Trung gõ qua bộ gõ pinyin (输入法): mười ngón gõ các chữ
 * Latin của pinyin, bộ gõ đổi chúng thành chữ Hán. Thứ cần gõ-mười-ngón chính là chuỗi chữ Latin
 * ấy, nên kho này là pinyin ĐÚNG NHƯ KHI GÕ VÀO BỘ GÕ: không dấu thanh, một từ nhiều âm tiết viết
 * liền (nihao, zhongguo, pengyou), chữ ü gõ bằng `v` (lvse, nvhai) như mọi bộ gõ pinyin.
 *
 * BỐ CỤC LÀ 217 (Chinese (Pinyin / QWERTY), trùng từng phím với QWERTY Mỹ). Thứ tự phím:
 *   f j · d k · s l · a ; · [ôn] · g h · e i · r u · [yếu] · [kiểm tra]
 *   t y · o w · c n · m v · [ôn] · q p · b x · z . , ' · Shift+Enter · [yếu] · [kiểm tra]
 *   hàng số · cột ngoài · [ôn] · đoạn văn ×2 · [kiểm tra cuối]
 * Với a s d f j k l thì pinyin chỉ viết được chừng chín mục (da, fa, fada…), không đủ mười hai
 * cho bài ôn tập — nên generator tự kéo bài g h lên trước bài ôn tập (`promoteVowel`), và
 * sha, shafa, dasha mở ra từ đó. Đó là hành vi mong muốn, không phải lỗi.
 *
 * Nhóm bên dưới ghi theo mốc đó. Nhóm chỉ là chú thích, KHÔNG phải cấu trúc: generator lọc mảng
 * `words` phẳng theo tập phím được phép, nên từ xếp nhầm nhóm thì vô hại.
 *
 * NGUỒN GỐC. Từ vựng phổ thông, dựng độc lập từ vốn từ thông dụng và soát tay. Không lấy từ nội
 * dung bài của site dạy gõ nào — xem luật "không chép typing.com" trong DECISIONS.md.
 *
 * LUẬT NHÀ cho mọi thứ thêm vào đây:
 *   - Chỉ /^[a-z]+$/. Không chữ hoa, không dấu thanh, không dấu nháy (xi'an không vào kho).
 *   - Mỗi mục là pinyin chuẩn của một âm tiết hoặc một từ thông dụng có thật.
 *   - Không danh từ riêng ngoài `names`; không gì bạo lực, y khoa, chính trị, tôn giáo hay khó
 *     chịu khi bị bắt gõ lại ba mươi lần.
 */
window.TypingEaseWords = window.TypingEaseWords || {};
window.TypingEaseWords.zh = {
  lang: 'zh',

  // Bộ chữ hợp lệ, để scripts/check-words.js gác được. `v` đứng thay cho ü, như trong bộ gõ.
  alphabet: 'abcdefghijklmnopqrstuvwxyz',

  words: [
    // --- a s d f j k l  (u1-l04) --------------------------------------------------------
    // 大 发 卡 拉 撒 啊 · 发达 大大 啦啦
    'a', 'da', 'fa', 'ka', 'la', 'sa', 'dada', 'fada', 'lala',

    // --- + g h  (u1-l06, được kéo lên trước bài ôn tập) -----------------------------------
    // 哈 杀 嘎 · 沙发 大厦 哈哈
    'ha', 'ga', 'sha', 'shafa', 'dasha', 'haha',

    // --- + e i  (u1-l07) ----------------------------------------------------------------
    'e', 'de', 'di', 'ge', 'he', 'ke', 'le', 'se', 'she', 'shi', 'ji', 'li', 'si', 'ai',
    'hei', 'gei', 'fei', 'lei', 'kai', 'hai', 'dai', 'gai', 'lai', 'sai', 'shai', 'jia',
    'jie', 'lie', 'die', 'shei', 'jiali',
    'dajia', 'feiji', 'shijie', 'keshi', 'haishi', 'jiejie', 'didi', 'kaishi', 'lishi',
    'lijie', 'jieshi', 'shihe', 'jishi', 'gege', 'heshi', 'keji', 'jihe', 'shiji', 'jidi',
    'shili', 'shifei', 'kele', 'dashi', 'dajie', 'shidai', 'jiedai', 'sheji', 'shishi',
    'kaifa', 'jiji', 'kafei', 'dagai', 'jiage', 'lihai', 'jiehe',

    // --- + r u  (u1-l08) ----------------------------------------------------------------
    'ru', 'ri', 're', 'lu', 'du', 'fu', 'gu', 'hu', 'ku', 'su', 'shu', 'ju', 'rui', 'gui',
    'hui', 'dui', 'sui', 'shui', 'jiu', 'liu', 'diu', 'hua', 'gua', 'kua', 'shua', 'guai',
    'huai', 'kuai', 'shuai', 'jue', 'er',
    'dushu', 'shufu', 'kuaile', 'shuru', 'ruhe', 'jiushi', 'shuaige', 'suiji', 'gushi',
    'gudai', 'kuaidi', 'juedui', 'juede', 'huijia', 'shijue', 'shuhua', 'hudie', 'riji',
    'fuli', 'shujia', 'huifu', 'suishi', 'kuaiji', 'juli', 'shuiku', 'jiaru', 'hushi',
    'fuhe', 'shijiu', 'shier', 'shiliu', 'shisi', 'kuaisu', 'ershi', 'guize', 'lushang',
    'shuliang', 'dili', 'liuxue', 'shuidi',

    // --- + t y  (u2-l01) ----------------------------------------------------------------
    'ta', 'te', 'ti', 'tu', 'tai', 'tui', 'tie', 'ya', 'ye', 'yi', 'yu', 'yue', 'yao',
    'tiyu', 'tushu', 'ditu', 'yigui', 'yuedu', 'yuyue', 'yiyi', 'yishi', 'yisi', 'shiti',
    'yeye', 'yushi', 'taidu', 'shuyu', 'yuedui', 'dayu', 'tishi', 'dayue', 'jiti', 'yiyue',
    'eryue', 'siyue', 'jiuyue', 'shiyue', 'liuyue', 'yeli', 'yishu', 'tese', 'teshu',
    'keti', 'shiye', 'yeshi', 'yiju', 'huiyi', 'tiyi', 'yuyi', 'tedi',
    'yihuier', 'duli', 'jiayi', 'ruyi',

    // --- + o w  (u2-l02) ----------------------------------------------------------------
    'wo', 'wa', 'wai', 'wei', 'wu', 'you', 'guo', 'duo', 'shuo', 'luo', 'tuo', 'huo', 'suo',
    'hao', 'dao', 'gao', 'lao', 'kao', 'tao', 'shao', 'jiao', 'liao', 'tiao', 'dou', 'gou',
    'hou', 'kou', 'lou', 'tou', 'shou', 'rou', 'ou',
    'haode', 'shuohua', 'guojia', 'duoshao', 'shouji', 'ruguo', 'shuiguo', 'wuli',
    'waiguo', 'laoshi', 'daoli', 'kaoshi', 'shoudu', 'yaoshi', 'youyi', 'tiaowu', 'wudao',
    'shuijiao', 'jiaoshi', 'shihou', 'houlai', 'yihou', 'wutai', 'woshi', 'weile',
    'shoutao', 'youhao', 'duoyu', 'guowai', 'guoji', 'jiaoyu', 'gaoji', 'gaodu', 'jiayou',
    'youju', 'luoji', 'luohou', 'wawa', 'waitao', 'weidao', 'weilai', 'diaoyu', 'taolu',
    'laojia', 'huodong', 'shuoshi', 'haoduo', 'haojiu', 'tiaoyue',
    'dalou', 'woshou', 'duoshu', 'gaosu', 'doufu',
    'youshi', 'jieguo',

    // --- + c n  (u2-l03) ----------------------------------------------------------------
    // Âm cuối -n và -ng, cùng c, ch — từ đây pinyin mới viết được phần lớn từ vựng.
    'ni', 'na', 'ne', 'nian', 'nan', 'nin', 'ning', 'neng', 'ren', 'shen', 'sheng', 'tian',
    'cha', 'chi', 'chang', 'chuan', 'cuo', 'cai', 'cong', 'yong', 'niao', 'shang', 'nong',
    'nihao', 'jintian', 'shenghuo', 'chifan', 'chengshi', 'chuanghu', 'chunjie',
    'chuntian', 'chenggong', 'chengji', 'cidian', 'caidan', 'canting', 'cesuo', 'cengjing',
    'cuowu', 'chufa', 'chuanshuo', 'changge', 'chaoshi', 'chuangyi', 'nianji', 'niunai',
    'nongcun', 'nuli', 'anjing', 'shengri', 'shengyin', 'yinggai', 'yinyue', 'yinhang',
    'yinwei', 'yijing', 'renshi', 'renwei', 'rongyi', 'renao', 'tiantian', 'diannao',
    'dianshi', 'dianying', 'dianhua', 'difang', 'fangjian', 'fandian', 'fangfa', 'fanyi',
    'gongsi', 'gongyuan', 'gongju', 'gongneng', 'guanggao', 'hanyu', 'huanying',
    'huanjing', 'jingcha', 'jiankang', 'jiandan', 'jiating', 'jianyi', 'jiaotong', 'jihua',
    'jingli', 'jingyan', 'jingchang', 'kending', 'keneng', 'kongjian', 'liaotian',
    'lingyu', 'nali', 'nage', 'neirong', 'nengli', 'nianling', 'renkou', 'renyuan',
    'shangdian', 'shangwu', 'shenti', 'shengyi', 'shiyan', 'shijian', 'shiyong', 'shunli',
    'suiran', 'suoyi', 'tongyi', 'tongshi', 'tiaojian', 'tingshuo', 'tuijian', 'wancheng',
    'wanshang', 'wangluo', 'wenhua', 'wenti', 'wenjian', 'yinci', 'yuanyin', 'yuanlai',
    'yundong', 'youyong', 'yuyan', 'gangcai', 'canjia', 'caise', 'chuang', 'dengdeng',
    'hanjia', 'dongtian', 'huanle', 'jiaocheng', 'kecheng', 'lianjie', 'lingwai',
    'nanhai', 'shuangshou', 'tongguo', 'wenzhang', 'cunchu', 'jianyue',

    // --- + m v  (u2-l04) ----------------------------------------------------------------
    // `v` là ü trong bộ gõ: 绿 lv, 女 nv, 旅 lv.
    'ma', 'mi', 'mian', 'men', 'mei', 'mao', 'ming', 'mu', 'lv', 'nv',
    'women', 'tamen', 'nimen', 'mingtian', 'mama', 'meimei', 'meiyou', 'meitian', 'mudi',
    'mashang', 'mafan', 'manman', 'maoyi', 'meili', 'meishu', 'mimi', 'mianji', 'moshi',
    'shenme', 'renmin', 'shengming', 'jiemu', 'timu', 'mingnian', 'jinnian', 'lvyou',
    'lvse', 'nvren', 'nvhai', 'nvshi', 'lvshi', 'lvguan', 'nver', 'kaolv', 'lvtu',
    'manyi', 'meihao', 'renmen', 'wenming', 'jiemian', 'meishi', 'mianfei', 'moren',
    'mingdan', 'mutou', 'mudan', 'mofang', 'mimang',
    'shumu', 'jiemi', 'mingliang', 'yumao', 'haoma', 'mima',
    'caomei', 'maojin', 'dongman', 'lvdeng', 'mishu',
    'meishuguan', 'mantou', 'miandui', 'yumi', 'fumu', 'menkou',

    // --- + q p  (u2-l06) ----------------------------------------------------------------
    'qi', 'qu', 'qian', 'qing', 'qiu', 'quan', 'pa', 'pao', 'pang', 'piao', 'pei', 'pian',
    'pengyou', 'piaoliang', 'qunian', 'qingkuang', 'qingchu', 'qiche', 'qingwen',
    'pianyi', 'pingguo', 'pingshi', 'pinyin', 'pinpai', 'pifu', 'paiming', 'qiantian',
    'qingnian', 'quanmian', 'qunti', 'queshi', 'queding', 'quyu', 'qidai', 'qiye', 'qita',
    'qihou', 'qiutian', 'tupian', 'diqiu', 'tiqian', 'yiqian', 'yiqi', 'tianqi', 'shengqi',
    'keqi', 'riqi', 'anquan', 'yaoqiu', 'qiaokeli', 'piping', 'shipin', 'chanpin',
    'pingjia', 'muqian', 'muqin', 'nianqing', 'congqian', 'peiyang', 'peihe', 'paiqiu',
    'pingpangqiu', 'shuiping', 'qianming', 'qingsong', 'qiangdiao', 'pinglun', 'ping',
    'qiuqian', 'quanqiu', 'qiaomiao', 'paidui', 'pinming',
    'quanli', 'peiyin', 'poqie', 'qinqie', 'pingchang', 'qianmian',

    // --- + b x  (u2-l07) ----------------------------------------------------------------
    'bu', 'ba', 'bao', 'bei', 'bi', 'bian', 'bing', 'xi', 'xia', 'xin', 'xiang', 'xue',
    'xing', 'xiao',
    'xuexi', 'xiexie', 'xihuan', 'xiansheng', 'xiaoshi', 'xuesheng', 'xiuxi', 'xiwang',
    'xinxi', 'xinwen', 'xiaoxue', 'xiangfa', 'xiangmu', 'xianshi', 'xingqi', 'xiatian',
    'xiayu', 'xiawu', 'xigua', 'dongxi', 'lianxi', 'guanxi', 'tongxue', 'jixu', 'yixia',
    'huaxue', 'wenxue', 'daxue', 'shuxue', 'xiaolv', 'lvxing', 'xingfu', 'xinqing',
    'xiaoxin', 'xuyao', 'baba', 'bianhua', 'biaoshi', 'biji', 'bijiao', 'bisai', 'biye',
    'bingqie', 'bufen', 'buguo', 'budan', 'banfa', 'bangong', 'banjia', 'baogao',
    'bianji', 'binguan', 'bowuguan', 'mingbai', 'qianbao', 'paobu', 'shoubiao', 'yibai',
    'yiban', 'baobao', 'biaoge', 'bianma', 'biaoqing', 'beibao', 'biancheng', 'mianbao',
    'xiuli', 'xianxia', 'xiaoxi', 'xuanxiang', 'baoxian', 'xiche', 'xiyi',
    'xiezi', 'xiaoshuo', 'xuexiao', 'xiangxin', 'xihongshi', 'bixu', 'bianxie',
    'jianpan', 'xiangbi', 'xianjin', 'xingming', 'xiaogou', 'baifen',

    // --- + z . , '  (u2-l08) ------------------------------------------------------------
    // z, zh — chữ cuối cùng của bảng chữ cái mà pinyin dùng.
    'zi', 'ze', 'zao', 'zou', 'zuo', 'zhe', 'zhi', 'zhu', 'zhong', 'zhen', 'zai', 'zui',
    'zhongguo', 'zaijian', 'zhidao', 'zuotian', 'zuoye', 'zenme', 'zhende', 'zhege',
    'zhuyi', 'zhunbei', 'zhengque', 'zhuyao', 'zhiyou', 'zhishi', 'zhongyao', 'zhoumo',
    'zixingche', 'ziji', 'zidian', 'zongshi', 'zuihou', 'zuijin', 'zaoshang', 'zaofan',
    'zhaopian', 'zhiliang', 'zhiye', 'zhuanye', 'zhuti', 'zuzhi', 'zeren', 'zhanghao',
    'zhuozi', 'yizi', 'haizi', 'beizi', 'kuaizi', 'mingzi', 'hanzi', 'baozi', 'jiaozi',
    'xianzai', 'gongzuo', 'fenzhong', 'bangzhu', 'zhongwen', 'zhongxin', 'zhongxue',
    'zhuanjia', 'zhunque', 'zhijie', 'zhiqian', 'zhihou', 'zhenshi', 'zhengzai',
    'zhongjian', 'zuobian', 'youbian', 'zanmen', 'zaici', 'shuzi', 'dazi', 'zuqiu',
    'zhanshi', 'zhaodao', 'zhuangtai', 'zixi', 'zhuce', 'zhangdan',
    'zhiding', 'zuopin', 'zhoubian', 'zhiwu', 'zhuanqian', 'zaixian', 'shurufa'
  ],

  /* Tên riêng cho bài dạy Shift và cho những câu cần chủ ngữ. Tên gọi phổ biến, viết pinyin
     liền như khi gõ; vài thành phố ở cuối. */
  names: [
    'wei', 'fang', 'jing', 'lei', 'jun', 'ming', 'hua', 'ying', 'tao', 'yan', 'xin',
    'hao', 'jie', 'lin', 'mei', 'qiang', 'lili', 'xiaoming', 'jiahui', 'haoran',
    'xinyi', 'yuxuan', 'zihan',
    'beijing', 'shanghai', 'nanjing', 'hangzhou', 'chengdu', 'wuhan', 'shenzhen'
  ],

  /* Câu cho các màn `dictation: 'sentence'`. Không viết hoa, không dấu chấm cuối: generator tự
     thêm cả hai khi giáo trình đã dạy Shift và dấu chấm. Pinyin tách theo từ, như cách người ta
     gõ cả cụm vào bộ gõ; chữ Hán ở chú thích cuối dòng. */
  sentences: [
    'wo xihuan he cha', // 我喜欢喝茶
    'jintian tianqi hen hao', // 今天天气很好
    'women yiqi qu chifan ba', // 我们一起去吃饭吧
    'ta zai xuexiao xuexi zhongwen', // 他在学校学习中文
    'mingtian shangwu wo yao qu yinhang', // 明天上午我要去银行
    'wo de pengyou zhu zai fujin', // 我的朋友住在附近
    'ta meitian zaoshang qu paobu', // 他每天早上去跑步
    'zhe ben shu hen you yisi', // 这本书很有意思
    'mama zai chufang zuo fan', // 妈妈在厨房做饭
    'wo xiang mai yi ge xin shouji', // 我想买一个新手机
    'women xiawu san dian kaihui', // 我们下午三点开会
    'qing ni shuo man yidian', // 请你说慢一点
    'wo zhengzai xue yong shi gen shouzhi dazi', // 我正在学用十根手指打字
    'dazi de shihou bu yao kan jianpan', // 打字的时候不要看键盘
    'shuru pinyin yihou shurufa hui xianshi hanzi', // 输入拼音以后输入法会显示汉字
    'didi zai gongyuan li ti zuqiu', // 弟弟在公园里踢足球
    'zhoumo women qu kan dianying', // 周末我们去看电影
    'ta jia you yi zhi xiao mao', // 他家有一只小猫
    'waimian xiayu le jide dai yusan', // 外面下雨了记得带雨伞
    'wo meitian he yi bei niunai', // 我每天喝一杯牛奶
    'zhe jian yifu you dian da', // 这件衣服有点大
    'tushuguan wanshang jiu dian guanmen' // 图书馆晚上九点关门
  ]
};
