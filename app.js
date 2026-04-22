// =============================================
// 神秘话术模板
// =============================================
const MYSTICAL_PHRASES = {
  openings: [
    '欢迎来到塔罗的神秘世界，让星辰为你揭示命运的密码...',
    '命运的齿轮已开始转动，塔罗牌将为你映照出内心的真相...',
    '闭上眼睛，深呼吸，让宇宙的能量流经你的指尖...',
    '塔罗牌是一面神奇的镜子，它能映照出你灵魂深处的答案...',
    '在这一刻，星辰与命运交汇，让我为你解读塔罗的神秘语言...',
  ],
  cardIntro: [
    '这张牌如同一把钥匙，为你打开了【{position}】的大门...',
    '在【{position}】的位置上，命运为你安排了这张牌...',
    '星辰在【{position}】处投下了它的影子...',
    '塔罗牌在低语，它说关于【{position}】的答案在这里...',
    '宇宙通过这张牌，向你揭示【{position}】的奥秘...',
  ],
  uprightPrefix: [
    '正位的{name}带来了积极的信号：',
    '{name}正位显现，它的光芒照耀着：',
    '当{name}正位出现，命运在微笑：',
    '{name}正位如同一盏明灯，指引着：',
  ],
  reversedPrefix: [
    '逆位的{name}在提醒你注意：',
    '{name}逆位出现，它带来的警示是：',
    '当{name}逆位，它邀请你反思：',
    '{name}逆位如同一面镜子，映照出：',
  ],
  connections: [
    '这两张牌之间流动着神秘的能量，共同编织着命运的画卷...',
    '牌与牌之间存在着隐秘的联系，让我们把它们串联成完整的故事...',
    '当我们将所有牌放在一起审视，一幅命运的图景渐渐清晰...',
    '星辰的排列从不是偶然的，让我们看看它们如何交织...',
  ],
  closings: [
    '塔罗牌只是命运的向导，真正的力量永远在你心中。愿你带着这份启示，勇敢前行。',
    '感谢你让我解读命运的密码。记住，每一张牌都是内心的一面镜子，答案早已在你心中。',
    '星辰已经述说，命运已经显现。愿你能在这份解读中找到内心的光芒。',
    '塔罗牌的智慧如星光般指引着你。信任你的直觉，勇敢踏上属于你的旅程。',
    '命运的礼物已经送达，接下来，请用你的行动书写属于你的故事。',
  ],
  elementInterpretations: {
    wands: '火元素的权杖牌组提醒我们要用热情与行动力去拥抱生活',
    cups: '水元素的圣杯牌组诉说着情感流动与心灵滋养的重要性',
    swords: '风元素的宝剑牌组引导我们用清晰的思维斩断迷雾',
    pentacles: '土元素的星币牌组提醒我们脚踏实地，珍惜当下的物质丰盛',
    major: '大阿卡纳承载着人生重大主题与灵魂觉醒的讯息',
  }
};

const TAROT_IMAGE_BASE = 'https://upload.wikimedia.org/wikipedia/commons/';

const TAROT_CARDS = [
  // 大阿卡纳 - 22张
  { id: 0, name: '愚者', emoji: '🃏', image: TAROT_IMAGE_BASE + '9/90/RWS_Tarot_00_Fool.jpg', suit: 'major', number: 0, keywords: ['自由', '冒险', '天真', '新开始'], 
    upright: '愚者正位象征着纯真的灵魂即将踏上未知的旅程。此刻的你站在悬崖边缘，却毫不恐惧——因为你相信宇宙会托住你的脚步。这是一个新篇章的开始，邀请你放下过去的包袱，以开放的心态拥抱即将到来的一切。',
    reversed: '逆位的愚者警示着鲁莽与逃避。也许你正在逃避某个重要的责任，或是做出了过于草率的决定。命运在提醒你，冒险需要智慧而非盲目。' },
  { id: 1, name: '魔术师', emoji: '🎩', image: TAROT_IMAGE_BASE + 'd/de/RWS_Tarot_01_Magician.jpg', suit: 'major', number: 1, keywords: ['意志力', '创造力', '资源整合', '显化'], 
    upright: '魔术师正位揭示了一个强大的真相：你已拥有实现目标的一切资源。此刻，宇宙正在邀请你将想法付诸行动。你的沟通能力、意志力和创造力都处于巅峰状态。',
    reversed: '逆位的魔术师暗示着才能的滥用或自我怀疑。也许你正在欺骗自己，或是被他人的花言巧语所迷惑。' },
  { id: 2, name: '女祭司', emoji: '🌙', image: TAROT_IMAGE_BASE + '8/88/RWS_Tarot_02_High_Priestess.jpg', suit: 'major', number: 2, keywords: ['直觉', '潜意识', '神秘知识', '内在智慧'], 
    upright: '女祭司正位是通往内心神殿的钥匙。她端坐在两根石柱之间，身后隐藏着智慧之海的帷幕。此刻，命运在邀请你倾听内心深处的声音。',
    reversed: '逆位的女祭司暗示着与内在声音的断联。也许你正在忽视直觉的警示，或是被外界的喧嚣所淹没。' },
  { id: 3, name: '女皇', emoji: '👑', image: TAROT_IMAGE_BASE + 'd/d2/RWS_Tarot_03_Empress.jpg', suit: 'major', number: 3, keywords: ['丰盛', '创造', '母性', '自然之美'], 
    upright: '女皇正位如同一片丰饶的花园，正在等待你的耕耘。她象征着大地母亲的滋养力量，提醒我们生命本身就是一场神圣的创造。',
    reversed: '逆位的女皇提醒你检查自己是否过度依赖他人，或是陷入了创意的瓶颈。' },
  { id: 4, name: '皇帝', emoji: '⚔️', image: TAROT_IMAGE_BASE + 'd/dd/RWS_Tarot_04_Emperor.jpg', suit: 'major', number: 4, keywords: ['权威', '结构', '秩序', '领导力'], 
    upright: '皇帝正位带来稳固的力量与清晰的秩序。他坐在石制的宝座上，象征着经得起时间考验的基石。此刻，命运正在邀请你建立更牢固的基础。',
    reversed: '逆位的皇帝警示着僵化与专制的危险。也许你正在过度控制某个人或事。' },
  { id: 5, name: '教皇', emoji: '🏛️', image: TAROT_IMAGE_BASE + 'c/c3/RWS_Tarot_05_Hierophant.jpg', suit: 'major', number: 5, keywords: ['传统', '信仰', '精神指引', '智慧传承'], 
    upright: '教皇正位揭示了一条通往智慧的道路。他手持权杖，脚下有两名信徒虔诚聆听。此刻，命运正在邀请你寻找精神的指引与归属。',
    reversed: '逆位的教皇邀请你打破常规，走出一条属于自己的道路。' },
  { id: 6, name: '恋人', emoji: '💕', image: TAROT_IMAGE_BASE + 'b/bb/RWS_Tarot_06_Lovers.jpg', suit: 'major', number: 6, keywords: ['爱情', '选择', '价值观', '和谐结合'], 
    upright: '恋人牌正位是塔罗中最美的牌之一。伊甸园中，亚当与夏娃在天使的见证下相遇。此刻，命运正在邀请你做出一个重要的选择。',
    reversed: '逆位的恋人暗示着选择的困难或是价值观的冲突。' },
  { id: 7, name: '战车', emoji: '🏆', image: TAROT_IMAGE_BASE + '9/9b/RWS_Tarot_07_Chariot.jpg', suit: 'major', number: 7, keywords: ['意志力', '胜利', '征服', '坚定前行'], 
    upright: '战车正位象征着意志的胜利。驾驭者站在车上，身后是城市，面前是广阔的天地。此刻，命运在告诉你：你有能力驾驭生命中的矛盾。',
    reversed: '逆位的战车警示着失控的危险。也许你正在某个领域过度用力。' },
  { id: 8, name: '力量', emoji: '🦁', image: TAROT_IMAGE_BASE + 'f/f5/RWS_Tarot_08_Strength.jpg', suit: 'major', number: 8, keywords: ['内在勇气', '耐心', '以柔克刚', '慈悲'], 
    upright: '力量牌正位展示了一个温柔的奇迹：一个女子轻抚狮子的嘴，毫无恐惧。这不是征服，而是理解。此刻，命运在告诉你，你拥有比想象中更强大的内心力量。',
    reversed: '逆位的力量牌暗示着内心的软弱或是力量的滥用。' },
  { id: 9, name: '隐士', emoji: '🕯️', image: TAROT_IMAGE_BASE + '4/4d/RWS_Tarot_09_Hermit.jpg', suit: 'major', number: 9, keywords: ['内省', '孤独', '寻求真理', '智慧之光'], 
    upright: '隐士正位手持一盏灯笼，站在山巅独自凝望。他邀请你暂时从喧嚣中退后，在寂静中寻找内心的答案。',
    reversed: '逆位的隐士警示着过度孤立的危险，或是拒绝帮助的固执。' },
  { id: 10, name: '命运之轮', emoji: '⭕', image: TAROT_IMAGE_BASE + '3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg', suit: 'major', number: 10, keywords: ['命运循环', '转折点', '宇宙时机', '机遇降临'], 
    upright: '命运之轮正位揭示了一个宇宙真理：万物皆在循环之中。轮盘转动，带起了某些，也放下了某些。此刻，命运的齿轮正在为你重新排列。',
    reversed: '逆位的命运之轮暗示着某种循环的阻滞或是与命运的抗争。' },
  { id: 11, name: '正义', emoji: '⚖️', image: TAROT_IMAGE_BASE + 'e/e0/RWS_Tarot_11_Justice.jpg', suit: 'major', number: 11, keywords: ['因果', '公正', '真相', '平衡'], 
    upright: '正义牌正位如同一架精准的天平，在衡量着一切因果。此刻，命运在告诉你，过去的努力与选择正在显现其结果。',
    reversed: '逆位的正义暗示着不公或是逃避责任。' },
  { id: 12, name: '倒吊人', emoji: '🔮', image: TAROT_IMAGE_BASE + '2/2b/RWS_Tarot_12_Hanged_Man.jpg', suit: 'major', number: 12, keywords: ['牺牲', '暂停', '新视角', '放下'], 
    upright: '倒吊人正位以一个奇特的方式悬挂着——却面带微笑。他揭示了塔罗最深的智慧：有时候，放下才能得到。此刻，命运在邀请你换一个角度看世界。',
    reversed: '逆位的倒吊人警示着无意义的牺牲或是抗拒改变。' },
  { id: 13, name: '死神', emoji: '🌹', image: TAROT_IMAGE_BASE + 'd/d7/RWS_Tarot_13_Death.jpg', suit: 'major', number: 13, keywords: ['转变', '结束', '蜕变', '重生'], 
    upright: '死神牌正位并非终结，而是蜕变。骑士骑着白马，国王倒下，孩童却仰望新生。此刻，命运在告诉你，某个篇章正在画上句号。',
    reversed: '逆位的死神暗示着对变化的抗拒或是某种停滞不前的状态。' },
  { id: 14, name: '节制', emoji: '✨', image: TAROT_IMAGE_BASE + 'f/f8/RWS_Tarot_14_Temperance.jpg', suit: 'major', number: 14, keywords: ['平衡', '调和', '中庸之道', '融合'], 
    upright: '节制牌正位展示了一个天使，将两杯水融合在一起。这是炼金术的时刻——在对立中找到统一。此刻，命运在邀请你寻找生命的平衡点。',
    reversed: '逆位的节制警示着极端与失衡。' },
  { id: 15, name: '恶魔', emoji: '🔗', image: TAROT_IMAGE_BASE + '5/55/RWS_Tarot_15_Devil.jpg', suit: 'major', number: 15, keywords: ['束缚', '欲望', '阴暗面', '觉醒契机'], 
    upright: '恶魔牌正位揭示了一个隐藏的真相：那些锁链是可以解开的。两个人被困在黑暗中，但那锁链松松垮垮——他们随时可以离开。',
    reversed: '逆位的恶魔带来一个好消息：觉醒的契机已经到来。' },
  { id: 16, name: '高塔', emoji: '⚡', image: TAROT_IMAGE_BASE + '5/53/RWS_Tarot_16_Tower.jpg', suit: 'major', number: 16, keywords: ['剧变', '觉醒', '崩塌', '解放'], 
    upright: '高塔牌正位展示了一场剧烈的崩塌。闪电击中塔尖，皇冠坠落，两人从高处跌落。这看起来可怕，但命运在告诉你：有些结构早已摇摇欲坠。',
    reversed: '逆位的高塔暗示着对变化的恐惧或推迟的觉醒。' },
  { id: 17, name: '星星', emoji: '⭐', image: TAROT_IMAGE_BASE + 'd/db/RWS_Tarot_17_Star.jpg', suit: 'major', number: 17, keywords: ['希望', '治愈', '灵感', '宁静'], 
    upright: '星星牌正位是塔罗中最温柔的光芒。裸身的女子在水边倾倒两壶水，天空中一颗大星被八颗小星环绕。此刻，命运在告诉你：风暴已经过去，现在是治愈的时刻。',
    reversed: '逆位的星星暗示着希望的低落或是与灵感的断联。' },
  { id: 18, name: '月亮', emoji: '🌕', image: TAROT_IMAGE_BASE + '7/7f/RWS_Tarot_18_Moon.jpg', suit: 'major', number: 18, keywords: ['幻觉', '直觉', '恐惧', '穿越迷雾'], 
    upright: '月亮牌正位邀请你走进迷雾。月光照耀着一条蜿蜒的小路，一只狼和一只狗对着月亮嚎叫，一只螃蟹从水中爬出。此刻，命运在告诉你：某些事情并非表面那样。',
    reversed: '逆位的月亮暗示着迷雾正在散去。' },
  { id: 19, name: '太阳', emoji: '☀️', image: TAROT_IMAGE_BASE + '1/17/RWS_Tarot_19_Sun.jpg', suit: 'major', number: 19, keywords: ['喜悦', '成功', '活力', '光明'], 
    upright: '太阳牌正位是塔罗中最纯粹的光芒。太阳高悬，一个裸身的孩童骑在白马上欢快微笑，向日葵灿烂盛开。此刻，命运在告诉你：你的时刻已经到来！',
    reversed: '逆位的太阳暗示着快乐有些延迟或光芒稍显黯淡。' },
  { id: 20, name: '审判', emoji: '📯', image: TAROT_IMAGE_BASE + 'e/e6/RWS_Tarot_20_Judgement.jpg', suit: 'major', number: 20, keywords: ['觉醒', '重生', '回顾', '召唤'], 
    upright: '审判牌正位揭示了一个神圣的时刻。天使吹响号角，死者从棺中复活，迎接新的生命。此刻，命运在告诉你：一个深层的觉醒正在发生。',
    reversed: '逆位的审判暗示着对觉醒的抗拒或是自我怀疑的困扰。' },
  { id: 21, name: '世界', emoji: '🌍', image: TAROT_IMAGE_BASE + 'f/ff/RWS_Tarot_21_World.jpg', suit: 'major', number: 21, keywords: ['完成', '整合', '成就', '圆满'], 
    upright: '世界牌正位是塔罗旅程的圆满。月桂环中，舞者身披紫纱，四角的活物见证这一刻。此刻，命运在告诉你：一个重要的周期已经完成。',
    reversed: '逆位的世界暗示着某个未完成的章节或是寻求捷径的诱惑。' },
  // 小阿卡纳 - 权杖
  { id: 22, name: '权杖一', emoji: '🔥', image: TAROT_IMAGE_BASE + '0/06/RWS_Tarot_Wands_01.jpg', suit: 'wands', number: 1, keywords: ['创意火花', '潜能迸发', '新事业起点', '激情澎湃'], 
    upright: '权杖一正位如同一道闪电划过夜空，点燃了创造的火焰。此刻，命运在告诉你：一个新的机会正在召唤你！',
    reversed: '逆位的权杖一提醒你，创意的火苗可能正被某些因素压制。' },
  { id: 23, name: '权杖三', emoji: '🌅', image: TAROT_IMAGE_BASE + '3/38/RWS_Tarot_Wands_03.jpg', suit: 'wands', number: 3, keywords: ['远见卓识', '等待成果', '展望未来', '扩张成长'], 
    upright: '权杖三正位描绘了一位智者站在山巅，遥望远方的船帆。此刻，命运在告诉你：你的计划正在稳固发展，成果即将到来。',
    reversed: '逆位的权杖三暗示着等待中的焦躁或是视野的局限。' },
  { id: 24, name: '权杖六', emoji: '🎖️', image: TAROT_IMAGE_BASE + 'b/b2/RWS_Tarot_Wands_06.jpg', suit: 'wands', number: 6, keywords: ['胜利荣耀', '公众认可', '傲人成就', '自信昂扬'], 
    upright: '权杖六正位展示了一个凯旋的骑士，头戴胜利的花环。此刻，命运在告诉你：你的努力正在被看见，胜利的号角已经吹响！',
    reversed: '逆位的权杖六暗示着成功的延迟或自我怀疑的困扰。' },
  { id: 25, name: '权杖王后', emoji: '🦊', image: TAROT_IMAGE_BASE + '2/26/RWS_Tarot_Wands_Queen.jpg', suit: 'wands', number: 13, keywords: ['热情洋溢', '魅力四射', '自信独立', '创意领袖'], 
    upright: '权杖王后正位如同一团温暖的火焰，她坐在宝座上，手握向日葵。此刻，命运在告诉你：你内在的火焰正在燃烧！',
    reversed: '逆位的权杖王后提醒你审视自己的热情是否被某些因素压抑。' },
  // 小阿卡纳 - 圣杯
  { id: 26, name: '圣杯一', emoji: '💧', image: TAROT_IMAGE_BASE + 'a/ae/RWS_Tarot_Cups_01.jpg', suit: 'cups', number: 1, keywords: ['情感涌动', '心灵敞开', '爱的新生', '直觉觉醒'], 
    upright: '圣杯一正位展示了一只从云中降临的圣杯，杯中水满溢。此刻，命运在告诉你：你的心正在准备好迎接一份真挚的情感！',
    reversed: '逆位的圣杯一暗示着情感的压抑或是心灵的暂时关闭。' },
  { id: 27, name: '圣杯二', emoji: '🥂', image: TAROT_IMAGE_BASE + '4/4b/RWS_Tarot_Cups_02.jpg', suit: 'cups', number: 2, keywords: ['灵魂伴侣', '真挚连接', '平等和谐', '心意相通'], 
    upright: '圣杯二正位描绘了两人在交换杯盏，头顶有象征神圣结合的双蛇杖。此刻，命运在告诉你：一个美好的连接正在形成或加深。',
    reversed: '逆位的圣杯二暗示着关系中的不平衡或是连接的断裂。' },
  { id: 28, name: '圣杯十', emoji: '🌈', image: TAROT_IMAGE_BASE + 'd/d7/RWS_Tarot_Cups_10.jpg', suit: 'cups', number: 10, keywords: ['家庭圆满', '幸福美满', '情感丰收', '内心安宁'], 
    upright: '圣杯十正位是塔罗中最温暖的画面。彩虹横跨天际，十个圣杯组成欢庆的拱门。此刻，命运在告诉你：幸福正在包围着你！',
    reversed: '逆位的圣杯十提醒你关注家庭或亲密关系中的某些裂痕。' },
  { id: 29, name: '圣杯国王', emoji: '🌊', image: TAROT_IMAGE_BASE + 'c/c8/RWS_Tarot_Cups_King.jpg', suit: 'cups', number: 14, keywords: ['情感智慧', '同理之心', '直觉深沉', '温柔守护'], 
    upright: '圣杯国王正位如同一片深邃的海，他的宝座漂浮在波浪之上。此刻，命运在告诉你：你已经准备好用成熟的方式处理情感问题。',
    reversed: '逆位的圣杯国王暗示着情绪的不稳定或是同理心的失去平衡。' },
  // 小阿卡纳 - 宝剑
  { id: 30, name: '宝剑一', emoji: '⚔️', image: TAROT_IMAGE_BASE + '9/9b/RWS_Tarot_Swords_01.jpg', suit: 'swords', number: 1, keywords: ['真相之刃', '思维突破', '斩断迷雾', '理性力量'], 
    upright: '宝剑一正位如同一道闪电划破黑暗的天空。此刻，命运在告诉你：真相即将大白！',
    reversed: '逆位的宝剑一暗示着思维的混乱或是真相的延迟。' },
  { id: 31, name: '宝剑二', emoji: '🙈', image: TAROT_IMAGE_BASE + '2/2b/RWS_Tarot_Swords_02.jpg', suit: 'swords', number: 2, keywords: ['僵持抉择', '内心挣扎', '暂时平衡', '等待转机'], 
    upright: '宝剑二正位描绘了一个蒙眼女子坐在月夜下，双手各持一把剑。此刻，命运在告诉你：你正处于一个需要选择但暂时无法抉择的状态。',
    reversed: '逆位的宝剑二暗示着抉择的时刻已经到来。' },
  { id: 32, name: '宝剑五', emoji: '🌀', image: TAROT_IMAGE_BASE + 'd/d0/RWS_Tarot_Swords_05.jpg', suit: 'swords', number: 5, keywords: ['空洞胜利', '冲突争斗', '自省时刻', '放下执念'], 
    upright: '宝剑五正位展示了争斗后的场景：胜利者挥舞着剑，败者黯然离去。此刻，命运在问你：你正在为什么而战？',
    reversed: '逆位的宝剑五带来和解的希望。' },
  { id: 33, name: '宝剑王后', emoji: '🦅', image: TAROT_IMAGE_BASE + 'd/d2/RWS_Tarot_Swords_Queen.jpg', suit: 'swords', number: 13, keywords: ['独立敏锐', '直率沟通', '理性思辨', '公正无私'], 
    upright: '宝剑王后正位如同一阵清醒的风，她端坐宝座，目光如炬。此刻，命运在告诉你：你拥有清晰的思维和直率的沟通能力。',
    reversed: '逆位的宝剑王后暗示着思维变得尖锐而伤人。' },
  // 小阿卡纳 - 星币
  { id: 34, name: '星币一', emoji: '💰', image: TAROT_IMAGE_BASE + 'a/a7/RWS_Tarot_Pentacles_01.jpg', suit: 'pentacles', number: 1, keywords: ['财富种子', '机遇降临', '物质显现', '现实根基'], 
    upright: '星币一正位展示了一只从云中伸出的手，掌心托着一枚闪耀的星币。此刻，命运在告诉你：一个新的物质机会正在向你走来！',
    reversed: '逆位的星币一提醒你关注那些错过的机会或物质上的不安。' },
  { id: 35, name: '星币五', emoji: '🤝', image: TAROT_IMAGE_BASE + '8/8b/RWS_Tarot_Pentacles_05.jpg', suit: 'pentacles', number: 5, keywords: ['困境时刻', '物质考验', '寻求援助', '信念支持'], 
    upright: '星币五正位描绘了两个衣衫褴褛的人在雪中艰难前行。此刻，命运在告诉你：你也许正在经历一段物质或精神的寒冬。',
    reversed: '逆位的星币五带来转机的消息。' },
  { id: 36, name: '星币十', emoji: '🏡', image: TAROT_IMAGE_BASE + '5/5e/RWS_Tarot_Pentacles_10.jpg', suit: 'pentacles', number: 10, keywords: ['财富传承', '家族根基', '物质圆满', '世代丰盛'], 
    upright: '星币十正位描绘了一幅家族繁荣的画面：一对夫妇站在庄园门口，子孙环绕。此刻，命运在告诉你：物质的根基已经牢固。',
    reversed: '逆位的星币十提醒你关注家庭或财务根基的某些问题。' },
  { id: 37, name: '星币国王', emoji: '💎', image: TAROT_IMAGE_BASE + 'e/e2/RWS_Tarot_Pentacles_King.jpg', suit: 'pentacles', number: 14, keywords: ['物质成就', '商业智慧', '稳重可靠', '丰盛丰收'], 
    upright: '星币国王正位如一座稳固的山，他坐在丰收的葡萄园中。此刻，命运在告诉你：你已经拥有掌控物质世界的能力！',
    reversed: '逆位的星币国王暗示着在物质领域的某些失衡。' },
];

const SPREADS = {
  1: ['当下指引'],
  3: ['过去', '现在', '未来'],
  5: ['现状', '挑战', '根基', '建议', '结果'],
};


// =============================================
// 粒子系统
// =============================================
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.resize();
    this.init();
    window.addEventListener('resize', () => this.resize());
    document.addEventListener('mousemove', e => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    for (let i = 0; i < 120; i++) {
      this.addParticle();
    }
  }

  addParticle(x, y, burst = false) {
    const colors = ['#c9a84c', '#a855f7', '#06b6d4', '#e2d9f3', '#f0d080', '#be185d'];
    this.particles.push({
      x: x || Math.random() * this.canvas.width,
      y: y || Math.random() * this.canvas.height,
      vx: (Math.random() - 0.5) * (burst ? 4 : 0.6),
      vy: (Math.random() - 0.5) * (burst ? 4 : 0.6) - (burst ? 0 : 0.2),
      size: Math.random() * (burst ? 4 : 3) + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: burst ? 1 : Math.random() * 0.6 + 0.2,
      life: burst ? 1 : -1,
      decay: burst ? 0.015 : 0,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.05 + 0.01,
      mouseInfluence: Math.random() * 0.001,
    });
  }

  burst(x, y, count = 30) {
    for (let i = 0; i < count; i++) {
      this.addParticle(x, y, true);
    }
  }

  update() {
    this.particles = this.particles.filter(p => p.life === -1 || p.alpha > 0);
    if (this.particles.filter(p => p.life === -1).length < 120) {
      this.addParticle();
    }
    for (const p of this.particles) {
      if (p.life !== -1) {
        p.alpha -= p.decay;
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.05;
      } else {
        const dx = this.mouseX - p.x;
        const dy = this.mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.vx += dx * p.mouseInfluence;
          p.vy += dy * p.mouseInfluence;
        }
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;
        p.twinkle += p.twinkleSpeed;
        p.alpha = (0.3 + Math.sin(p.twinkle) * 0.25);
        if (p.x < 0) p.x = this.canvas.width;
        if (p.x > this.canvas.width) p.x = 0;
        if (p.y < 0) p.y = this.canvas.height;
        if (p.y > this.canvas.height) p.y = 0;
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const p of this.particles) {
      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowBlur = p.size * 3;
      this.ctx.shadowColor = p.color;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }
  }

  loop() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.loop());
  }
}

// =============================================
// 手势识别器
// =============================================
class GestureDetector {
  constructor(onGesture) {
    this.onGesture = onGesture;
    this.currentGesture = null;
    this.fistStartTime = null;
    this.fistHoldDuration = 1500;
    this.hands = null;
    this.camera = null;
    this.isRunning = false;
    this.progressCallback = null;
  }

  async start(videoEl, canvasEl) {
    if (!window.Hands) {
      console.warn('MediaPipe Hands not loaded');
      return false;
    }
    this.videoEl = videoEl;
    this.canvasEl = canvasEl;
    this.canvasCtx = canvasEl.getContext('2d');
    this.hands = new Hands({
      locateFile: file => `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915/${file}`,
    });
    this.hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.5,
    });
    this.hands.onResults(results => this.processResults(results));
    try {
      this.camera = new Camera(videoEl, {
        onFrame: async () => { await this.hands.send({ image: videoEl }); },
        width: 640,
        height: 480,
      });
      await this.camera.start();
      this.isRunning = true;
      return true;
    } catch (e) {
      console.error('Camera start failed:', e);
      return false;
    }
  }

  stop() {
    if (this.camera) {
      this.camera.stop();
      this.isRunning = false;
    }
  }

  processResults(results) {
    const canvas = this.canvasEl;
    const ctx = this.canvasCtx;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) {
      this.setGesture('none');
      return;
    }
    const landmarks = results.multiHandLandmarks[0];
    if (window.drawConnectors && window.drawLandmarks) {
      drawConnectors(ctx, landmarks, HAND_CONNECTIONS, {
        color: 'rgba(201, 168, 76, 0.6)',
        lineWidth: 2,
      });
      drawLandmarks(ctx, landmarks, {
        color: 'rgba(168, 85, 247, 0.8)',
        lineWidth: 1,
        radius: 4,
      });
    }
    const gesture = this.analyzeGesture(landmarks);
    this.setGesture(gesture);
  }

  analyzeGesture(landmarks) {
    const tips = [8, 12, 16, 20];
    const pips = [6, 10, 14, 18];
    let closedFingers = 0;
    for (let i = 0; i < 4; i++) {
      if (landmarks[tips[i]].y > landmarks[pips[i]].y) {
        closedFingers++;
      }
    }
    const thumbTip = landmarks[4];
    const thumbMcp = landmarks[2];
    const thumbClosed = thumbTip.x > thumbMcp.x;
    if (closedFingers >= 3) return 'fist';
    if (closedFingers <= 1) return 'open';
    return 'partial';
  }

  setGesture(gesture) {
    if (gesture === 'fist') {
      if (!this.fistStartTime) {
        this.fistStartTime = Date.now();
      }
      const elapsed = Date.now() - this.fistStartTime;
      const progress = Math.min(elapsed / this.fistHoldDuration, 1);
      if (this.progressCallback) this.progressCallback(progress);
      if (progress >= 1) {
        this.fistStartTime = null;
        this.onGesture('fist_complete');
      }
    } else {
      this.fistStartTime = null;
      if (this.progressCallback) this.progressCallback(0);
    }
    this.currentGesture = gesture;
    if (this.gestureChangeCallback) this.gestureChangeCallback(gesture);
  }
}

// =============================================
// 应用主逻辑
// =============================================
class TarotApp {
  constructor() {
    this.currentSpread = 1;
    this.drawMethod = 'gesture';
    this.drawnCards = [];
    this.flippedCount = 0;
    this.apiKey = localStorage.getItem('tarot_api_key') || '';
    this.particles = null;
    this.gestureDetector = null;
    this.init();
  }

  init() {
    const canvas = document.getElementById('particleCanvas');
    this.particles = new ParticleSystem(canvas);
    this.particles.loop();
    this.runLoadingSequence();
    this.bindEvents();
  }

  runLoadingSequence() {
    const fill = document.getElementById('loadingFill');
    const text = document.getElementById('loadingText');
    const steps = [
      { pct: 20, msg: '正在连接星辰...' },
      { pct: 45, msg: '解锁命运之眼...' },
      { pct: 70, msg: '召唤塔罗能量...' },
      { pct: 90, msg: '准备牌阵...' },
      { pct: 100, msg: '一切就绪，命运等待揭晓' },
    ];
    let i = 0;
    const next = () => {
      if (i >= steps.length) {
        setTimeout(() => this.showScreen('mainScreen'), 800);
        return;
      }
      fill.style.width = steps[i].pct + '%';
      text.textContent = steps[i].msg;
      i++;
      setTimeout(next, 600);
    };
    setTimeout(next, 400);
  }

  bindEvents() {
    document.querySelectorAll('.spread-option').forEach(el => {
      el.addEventListener('click', () => {
        document.querySelectorAll('.spread-option').forEach(o => o.classList.remove('active'));
        el.classList.add('active');
        this.currentSpread = parseInt(el.dataset.spread);
      });
    });
    document.querySelectorAll('.method-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.method-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.drawMethod = btn.dataset.method;
      });
    });
    document.getElementById('beginBtn').addEventListener('click', () => { this.startReading(); });
    document.getElementById('backBtn').addEventListener('click', () => { this.stopGesture(); this.showScreen('mainScreen'); });
    document.getElementById('backBtn2').addEventListener('click', () => { this.showScreen('mainScreen'); });
    document.getElementById('cardDeck').addEventListener('click', () => { this.drawCardClick(); });
    document.getElementById('confirmDrawBtn').addEventListener('click', () => { this.showRevealScreen(); });
    document.getElementById('interpretBtn').addEventListener('click', () => { this.startReading_interpret(); });
    document.getElementById('newReadingBtn').addEventListener('click', () => { this.resetAll(); });
    document.getElementById('settingsBtn').addEventListener('click', () => { document.getElementById('apiModal').classList.add('open'); });
    document.getElementById('saveApiKey').addEventListener('click', () => {
      const key = document.getElementById('apiKeyInput').value.trim();
      if (key) { this.apiKey = key; localStorage.setItem('tarot_api_key', key); }
      document.getElementById('apiModal').classList.remove('open');
    });
    document.getElementById('skipApiKey').addEventListener('click', () => { document.getElementById('apiModal').classList.remove('open'); });
    document.getElementById('apiModal').addEventListener('click', e => { if (e.target === document.getElementById('apiModal')) { document.getElementById('apiModal').classList.remove('open'); } });
    if (!this.apiKey) { setTimeout(() => { document.getElementById('apiModal').classList.add('open'); }, 3500); } else { document.getElementById('apiKeyInput').value = this.apiKey; }
  }

  showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

  startReading() {
    this.drawnCards = [];
    this.flippedCount = 0;
    if (this.drawMethod === 'gesture') { this.showGestureScreen(); } else { this.showClickScreen(); }
  }

  async showGestureScreen() {
    this.showScreen('gestureScreen');
    this.gestureDrawCount = 0;
    this.targetCount = this.currentSpread;
    const videoEl = document.getElementById('webcam');
    const canvasEl = document.getElementById('handCanvas');
    const statusOrb = document.getElementById('statusOrb');
    const gestureText = document.getElementById('gestureText');
    const progressContainer = document.getElementById('gestureProgress');
    const progressRing = document.getElementById('progressRing');
    const ringText = document.getElementById('ringText');
    const syncSize = () => { canvasEl.width = videoEl.videoWidth || 480; canvasEl.height = videoEl.videoHeight || 360; };
    videoEl.addEventListener('loadedmetadata', syncSize);
    this.gestureDetector = new GestureDetector(async (event) => {
      if (event === 'fist_complete') {
        if (this.gestureDrawCount < this.targetCount) {
          this.gestureDrawCount++;
          const card = this.drawRandomCard();
          this.drawnCards.push(card);
          gestureText.textContent = `✓ 已抽取第 ${this.gestureDrawCount} 张！${this.gestureDrawCount < this.targetCount ? ' 请继续握拳抽取...' : ''}`;
          progressContainer.style.display = 'none';
          const rect = document.getElementById('gestureScreen').getBoundingClientRect();
          this.particles.burst(rect.width / 2, rect.height / 2, 40);
          if (this.gestureDrawCount >= this.targetCount) {
            statusOrb.className = 'status-orb open';
            gestureText.textContent = '✦ 命运已选择，即将揭示...';
            await this.sleep(1200);
            this.stopGesture();
            this.showRevealScreen();
          } else { statusOrb.className = 'status-orb detecting'; }
        }
      }
    });
    this.gestureDetector.gestureChangeCallback = (gesture) => {
      if (this.gestureDrawCount >= this.targetCount) return;
      if (gesture === 'none') { statusOrb.className = 'status-orb'; gestureText.textContent = '正在寻找手掌...'; progressContainer.style.display = 'none'; }
      else if (gesture === 'open') { statusOrb.className = 'status-orb open'; gestureText.textContent = `手掌已检测 ✓  握拳以抽取第 ${this.gestureDrawCount + 1} 张牌`; progressContainer.style.display = 'none'; }
      else if (gesture === 'fist' || gesture === 'partial') { statusOrb.className = 'status-orb fist'; gestureText.textContent = '正在感应...握紧！'; progressContainer.style.display = 'flex'; }
    };
    this.gestureDetector.progressCallback = (progress) => {
      const circumference = 276.5;
      const offset = circumference - circumference * progress;
      progressRing.style.strokeDashoffset = offset;
      const pct = Math.round(progress * 100);
      ringText.innerHTML = pct < 100 ? `${pct}%` : '✓';
    };
    const success = await this.gestureDetector.start(videoEl, canvasEl);
    if (!success) { gestureText.textContent = '摄像头初始化失败，请使用意念抽牌'; statusOrb.className = 'status-orb'; setTimeout(() => { this.stopGesture(); this.showClickScreen(); }, 2000); }
    else { gestureText.textContent = `请展开手掌，准备抽取第 1 张牌`; statusOrb.className = 'status-orb detecting'; }
  }

  stopGesture() {
    if (this.gestureDetector) { this.gestureDetector.stop(); this.gestureDetector = null; }
    const video = document.getElementById('webcam');
    if (video.srcObject) { video.srcObject.getTracks().forEach(t => t.stop()); video.srcObject = null; }
  }

  showClickScreen() {
    this.showScreen('clickScreen');
    this.clickDrawCount = 0;
    document.getElementById('cardsNeeded').textContent = this.currentSpread;
    document.getElementById('drawnCards').innerHTML = '';
    document.getElementById('confirmDrawBtn').style.display = 'none';
  }

  drawCardClick() {
    if (this.clickDrawCount >= this.currentSpread) return;
    const card = this.drawRandomCard();
    this.drawnCards.push(card);
    this.clickDrawCount++;
    const drawn = document.getElementById('drawnCards');
    const mini = document.createElement('div');
    mini.className = 'drawn-mini-card';
    mini.style.animationDelay = `${(this.clickDrawCount - 1) * 0.1}s`;
    drawn.appendChild(mini);
    const rect = document.getElementById('cardDeck').getBoundingClientRect();
    this.particles.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 20);
    document.getElementById('cardsNeeded').textContent = this.currentSpread - this.clickDrawCount;
    if (this.clickDrawCount >= this.currentSpread) {
      document.getElementById('cardDeck').style.opacity = '0.4';
      document.getElementById('cardDeck').style.pointerEvents = 'none';
      document.getElementById('confirmDrawBtn').style.display = 'block';
      setTimeout(() => { document.getElementById('confirmDrawBtn').style.opacity = '1'; }, 100);
    }
  }

  drawRandomCard() {
    const usedIds = this.drawnCards.map(c => c.id);
    let available = TAROT_CARDS.filter(c => !usedIds.includes(c.id));
    const card = available[Math.floor(Math.random() * available.length)];
    return { ...card, reversed: Math.random() > 0.6 };
  }

  showRevealScreen() {
    this.showScreen('revealScreen');
    const area = document.getElementById('cardsRevealArea');
    area.innerHTML = '';
    this.flippedCount = 0;
    const positions = SPREADS[this.currentSpread] || ['指引'];
    this.drawnCards.forEach((card, i) => {
      const el = document.createElement('div');
      el.className = 'reveal-card';
      el.style.animationDelay = `${i * 0.15}s`;
      el.innerHTML = `
        <div class="reveal-card-inner">
          <div class="reveal-card-back">
            <div class="card-symbol">🔮</div>
            <div class="card-back-pattern"></div>
          </div>
          <div class="reveal-card-front ${card.reversed ? 'reversed' : ''}">
            <div class="card-image-container">
              <img src="${card.image}" alt="${card.name}" class="card-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="card-emoji-fallback" style="display:none;">${card.emoji}</div>
            </div>
            <div class="card-name">${card.name}</div>
            <div class="card-position-label">${positions[i] || ''}</div>
            ${card.reversed ? '<div class="card-reversed-badge">逆位</div>' : ''}
          </div>
        </div>
      `;
      el.addEventListener('click', () => this.flipCard(el, card, i));
      area.appendChild(el);
      setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, i * 200);
    });
  }

  flipCard(el, card, index) {
    if (el.classList.contains('flipped')) return;
    el.classList.add('flipped');
    this.flippedCount++;
    const rect = el.getBoundingClientRect();
    this.particles.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);
    if (this.flippedCount >= this.drawnCards.length) {
      setTimeout(() => {
        document.getElementById('interpretBtn').style.display = 'block';
        document.getElementById('interpretBtn').style.animation = 'fadeIn 0.5s ease';
      }, 400);
    }
  }

  startReading_interpret() {
    this.showScreen('readingScreen');
    const summary = document.getElementById('cardsSummary');
    const positions = SPREADS[this.currentSpread] || ['指引'];
    summary.innerHTML = this.drawnCards.map((c, i) => `
      <div class="summary-card ${c.reversed ? 'reversed' : ''}">
        <div class="s-image-container">
          <img src="${c.image}" alt="${c.name}" class="s-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="s-emoji" style="display:none;">${c.emoji}</div>
        </div>
        <div class="s-name">${c.name}</div>
        <div class="s-pos">${positions[i] || ''} ${c.reversed ? '(逆)' : ''}</div>
      </div>
    `).join('');
    document.getElementById('readingContent').innerHTML = '<div class="reading-loading" id="readingLoading"><div class="crystal-ball"><div class="crystal-inner"></div><div class="crystal-shimmer"></div></div><p>星辰正在解读你的命运...</p></div>';
    const question = document.getElementById('questionInput').value.trim();
    if (this.apiKey && this.apiKey.startsWith('sk-')) { this.callOpenAI(question); } else { setTimeout(() => this.generateLocalReading(question), 1800); }
  }

  async callOpenAI(question) {
    const positions = SPREADS[this.currentSpread] || ['指引'];
    const cardDescriptions = this.drawnCards.map((c, i) => `位置"${positions[i]}": ${c.name}${c.reversed ? '(逆位)' : '(正位)'} - 关键词: ${c.keywords.join('、')}`).join('\n');
    const prompt = `你是一位充满智慧的塔罗牌占卜师，用诗意而深刻的语言为用户解读塔罗牌。用户的问题：${question || '无特定问题，请给予整体人生指引'} 抽到的牌：${cardDescriptions} 请用神秘优美的中文，分别解读每张牌在其位置上的含义，然后给出综合解读。`;
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.apiKey}` },
        body: JSON.stringify({ model: 'gpt-3.5-turbo', messages: [{ role: 'user', content: prompt }], max_tokens: 800, temperature: 0.85 }),
      });
      if (!response.ok) throw new Error('API Error');
      const data = await response.json();
      const text = data.choices[0].message.content;
      this.displayReadingWithTypewriter(text);
    } catch (e) { console.error('OpenAI error:', e); this.generateLocalReading(document.getElementById('questionInput').value); }
  }

  generateLocalReading(question) {
    const positions = SPREADS[this.currentSpread] || ['指引'];
    const opening = MYSTICAL_PHRASES.openings[Math.floor(Math.random() * MYSTICAL_PHRASES.openings.length)];
    let html = '<div class="reading-text-content">';
    html += `<p class="opening-phrase typewriter-cursor">${opening}</p>`;
    if (question) { html += `<h3>✦ 你的问题</h3><p>「${question}」<br><br>星辰已感知你的疑问，塔罗牌将作为命运的信使，为你揭示隐藏在时间长河中的答案...</p>`; }
    else { html += `<p>在这神圣的时刻，塔罗牌将为你映照出命运的镜像。请以开放的心接收这些来自宇宙的智慧...</p>`; }
    this.drawnCards.forEach((card, i) => {
      const meaning = card.reversed ? card.reversed : card.upright;
      const pos = positions[i] || '指引';
      const cardIntro = MYSTICAL_PHRASES.cardIntro[Math.floor(Math.random() * MYSTICAL_PHRASES.cardIntro.length)].replace('{position}', pos);
      const prefixType = card.reversed ? 'reversedPrefix' : 'uprightPrefix';
      const prefix = MYSTICAL_PHRASES[prefixType][Math.floor(Math.random() * MYSTICAL_PHRASES[prefixType].length)].replace('{name}', card.name);
      const elementInfo = MYSTICAL_PHRASES.elementInterpretations[card.suit] || '';
      html += `<div class="card-reading-section"><div class="card-reading-title">${card.emoji} ${cardIntro}</div><div class="card-reading-subtitle">${card.name}${card.reversed ? ' 【逆位】' : ' 【正位】'}</div><div class="card-reading-text"><span class="reading-prefix">${prefix}</span><br><br>${meaning}<br><br><em class="element-note">${elementInfo}。${card.keywords.slice(0, 2).join('与')}的能量正在你的生命中流动，请感受它的共鸣...</em></div></div>`;
    });
    html += `<h3>✦ 命运的连线</h3>`;
    const connection = MYSTICAL_PHRASES.connections[Math.floor(Math.random() * MYSTICAL_PHRASES.connections.length)];
    html += `<p>${connection}</p>`;
    const cardNames = this.drawnCards.map(c => c.name).join('、');
    const cardKeywords = this.drawnCards.flatMap(c => c.keywords.slice(0, 2)).slice(0, 6).join('、');
    const elements = this.drawnCards.map(c => c.suit);
    const hasMultipleSuits = new Set(elements).size > 1;
    if (hasMultipleSuits) { html += `<p>多元素的牌组出现在你的牌阵中，这意味着生命的不同层面正在交织——${cardKeywords}。这些能量共同构成了你此刻命运的完整图景。</p>`; }
    else { const dominantElement = MYSTICAL_PHRASES.elementInterpretations[elements[0]] || ''; html += `<p>同一元素的牌组显现，暗示着能量的集中。${dominantElement}。这是命运在向你强调某个特定领域的重要性。</p>`; }
    const reversedCount = this.drawnCards.filter(c => c.reversed).length;
    if (reversedCount === 0) { html += `<p>所有牌都以正位出现，这是一个非常积极的信号！宇宙正在向你传递祝福与肯定的讯息。</p>`; }
    else if (reversedCount === this.drawnCards.length) { html += `<p>多张逆位牌的出现并非凶兆，而是命运的温柔提醒——有些内在的功课需要被看见和转化。</p>`; }
    else { html += `<p>正逆位交织的牌阵如同生命的起伏，提醒我们光与影都是成长不可或缺的部分。</p>`; }
    html += `<h3>✦ 星辰的总结</h3>`;
    html += `<p>综合${cardNames}的启示，命运的画卷在你面前徐徐展开。每一张牌都是一面镜子，映照出你灵魂深处的某个面向。请记住，塔罗牌不是预言，而是照见——真正的力量永远在你手中。`;
    if (question) { html += `<br><br>针对你的问题，星辰的建议是：信任这个过程，答案已经在你的心中。如果仍然感到迷茫，不妨在安静的时刻冥想这张最能触动你的牌，它的智慧将向你诉说更深层的话语。</p>`; }
    else { html += `<br><br>此刻，宇宙邀请你关注生命中正在流动的${cardKeywords}能量。这不是命令，而是温柔的提示——你有自由选择如何回应。</p>`; }
    const closing = MYSTICAL_PHRASES.closings[Math.floor(Math.random() * MYSTICAL_PHRASES.closings.length)];
    html += `<div class="closing-phrase"><p>${closing}</p></div>`;
    html += '</div>';
    document.getElementById('readingContent').innerHTML = html;
  }

  displayReadingWithTypewriter(text) {
    const content = document.getElementById('readingContent');
    const formatted = text.split('\n').filter(line => line.trim()).map(line => `<p>${line}</p>`).join('');
    content.innerHTML = `<div class="reading-text-content">${formatted}</div>`;
  }

  resetAll() {
    this.drawnCards = [];
    this.flippedCount = 0;
    this.stopGesture();
    document.getElementById('cardDeck').style.opacity = '1';
    document.getElementById('cardDeck').style.pointerEvents = 'auto';
    document.getElementById('drawnCards').innerHTML = '';
    document.getElementById('confirmDrawBtn').style.display = 'none';
    this.showScreen('mainScreen');
  }

  sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
}

window.addEventListener('DOMContentLoaded', () => { new TarotApp(); });
