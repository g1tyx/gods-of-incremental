/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Main": "主界面",
    "Incremental": "增量",
    "Gods of Incremental Server": "增量服务器之神",
    "loop=true hidden=true autostart=true": "循环=true 隐藏=true 自动开始=true",
    "Point Powerer": "点数力量",
    "Point Processor": "点数处理器",
    "Point Producer": "点数生产者",
    "This is just an ordinary game.": "这只是一个普通的游戏。",
    "This is the blank canvas for any incremental game.": "这是任何增量游戏的空白画布。",
    "This is the framework for much better games.": "这是更好的游戏的框架。",
    "Mute": "静音",
    "Unmute": "播放",
    "on reset.": "在重置时。",
    "Prestige": "声望",
    "Incremental power was the strongest form of power, now it's barely passing.": "增量力量曾经是最强的力量，现在已经勉强过关了。",
    "Prestige for prestige points": "声望以获得声望点",
    "Prestige Point Buyable": "声望点数可购买",
    "prestige points.": "声望点数。",
    "Unlocks a new layer": "解锁一个新层",
    "Incremental Power": "增量力量",
    "Meta-Prestige": "元声望",
    "Pathless Factors": "无路因子",
    "Score Breakdown": "分数明细",
    "Standard Path Activator": "标准路径激活器",
    "Unlocks activation for the standard path.": "解锁标准路径的激活。",
    "Upgrades": "升级",
    "Boosts points based on unspent incremental power.": "根据未使用的 增量力量 来提升 点数。",
    "After THEY took everything from us, nothing was the same.": "当他们夺走了我们的一切之后，一切都不再一样了。",
    "CHAPTER 1: THE STANDARD PATH.": "第一章：标准路径。",
    "I'm going to ask you a question. What are you doing here?": "我要问你一个问题。 你在这里做什么？",
    "Incrementals aren't as great as they were before.": "增量不如以前那么大。",
    "THE DEATH REALM took everything. It's all over.": "死亡王国夺走了一切。 一切都结束了。",
    "The incremental power didn't work as well. We were all doomed.": "增量力量并没有发挥同样的作用。 我们都注定了。",
    "There is no point of restoring the balance of incrementals.": "恢复增量平衡是没有意义的。",
    "Automatically buys main buyables without spending points.": "自动购买主要可购买物品，无需花费点数。",
    "Boosts points based on prestige points.": "根据声望点数提升点数。",
    "Energy": "能量",
    "Energy Extractor": "能量提取器",
    "prestige energy per second.": "每秒声望能量。",
    "prestige energy.": "声望能量。",
    "Standard Path Effects:": "标准路径效果：",
    "Start Producing": "开始生产",
    "Stop Producing": "停止生产",
    "This should make incremental power stronger.": "这应该会让增量力量变得更强。",
    "Unlocks machines.": "解锁机器。",
    "After many failed attempts. The path of singularity. The game developer.": "经过多次失败的尝试。 独特之路。 游戏开发商。",
    "All attempts to produce a perfect hero.": "所有的努力都是为了塑造一个完美的英雄。",
    "Create a prestige machine.": "创造一台声望机器。",
    "However, there are some corrupted energies in it.": "然而，其中却蕴藏着一些腐化的能量。",
    "I am no being of incremental power, as I am from a foreign realm.": "我并不是拥有增量力量的存在，因为我来自异域。",
    "I am not one of the four nobles, but I work with them.": "我不是四贵族之一，但我和他们一起工作。",
    "I am not the greatest at giving directions.": "我并不是最擅长给出指示的人。",
    "I want to make sure no hero loses to celestial powers.": "我想确保没有英雄会输给天体力量。",
    "If you have made contact with Yhvr, follow his directions.": "如果您已与 Yhvr 取得联系，请按照他的指示进行操作。",
    "Last time it didn't go so well.": "上次没那么顺利。",
    "machine corruption.": "机器腐败。",
    "Machines": "机器",
    "Maybe you do have a reason to be here.": "也许你确实有理由来这里。",
    "Me and my team worked very hard to create a path like this.": "我和我的团队非常努力地创造了一条这样的道路。",
    "My name is Red Diamond. I am from THE HIGHER PLANE OF EXISTENCE.": "我的名字是红钻石。 我来自更高的存在平面。",
    "Oh shoot! I just realized!": "哦，射击！ 我才发现！",
    "Platonic! The corruptions! The path of ascension!": "柏拉图式的！ 腐败！ 飞升之路！",
    "prestige machines.": "声望机器。",
    "That yellow glow...": "那黄色的光芒...",
    "The standard path. The easiest one to master.": "标准路径。 最容易掌握的一种。",
    "They will provide a good booster and help with meta-prestiges.": "他们将提供良好的助推器并帮助提升元声望。",
    "Unlike the last one...": "与上一个不同的是...",
    "WHY DID I BRING THEM OVER TO THIS PATH...": "我为什么要带他们走上这条路……",
    "Yhvr was right. Maybe a simpler path is the way to start.": "Yhvr 是对的。 也许一条更简单的道路是开始的方式。",
    "YOU CANNOT REFUND MACHINES. THE CORRUPTION IS INEVITABLE.": "您无法为机器退款。 腐败是不可避免的。",
    "You must be the hero! I will introduce myself.": "你一定是英雄！ 我会介绍我自己。",
    "Your job now should be to produce prestige machines.": "你现在的工作应该是生产名牌机器。",
    "Unlocks a pathless factor.": "解锁一个无路因子。",
    "Boosts prestige points based on unspent incremental power.": "根据未使用的增量力量提升声望点数。",
    "Pure Energy": "纯粹能量",
    "Unlocks the pure energy feature.": "解锁纯粹能量功能。",
    "Gives extra point producers based on incremental energy.": "根据增量能量为生产者提供额外点数。",
    "Unlocks pure energy.": "解锁纯粹能量。",
    "Absorb your energy for pure energy.": "吸收你的能量以获得纯粹能量。",
    "After that incident. That incident that got all of them exiled.": "那次事件之后。 那次事件导致他们所有人都被流放。",
    "Anyway, gotta go. You'll get more lore later.": "无论如何，该走了。 稍后您会获得更多知识。",
    "Autobuy prestige buyables without them spending.": "无需花钱即可自动购买声望可购买的商品。",
    "booster energy per second.": "每秒的助推器能量。",
    "Booster Energy Producer": "助推器能量生产者",
    "booster energy.": "助推器能量。",
    "galaxy.click was recently made. The future should be bright.": "Galaxy.click 最近发布。 未来应该是光明的。",
    "generator energy per second.": "生成器每秒的能量。",
    "Generator Energy Producer": "生成器能量生产商",
    "generator energy.": "生成器能量。",
    "Hello again. Sorry about before.": "再一次问好。 之前的事很抱歉。",
    "His many attempts to use his many-dimensional cubes failed.": "他多次尝试使用多维立方体，但都失败了。",
    "However, the void grows stronger. I don't think things are gonna go well.": "然而，虚空却越来越强烈。 我不认为事情会进展顺利。",
    "I have no clue why the nobles still trust him.": "我不知道为什么贵族们仍然信任他。",
    "I've never gone there before, but I'd love to see it one day.": "我以前从未去过那里，但我很想有一天能去看看。",
    "It is now the key area of the incremental community.": "现在是增量社区的重点领域。",
    "Jacorb and Aarex's attempts failed as well.": "雅各布和亚雷克斯的尝试也失败了。",
    "Keeps prestige upgrades on reset.": "重置时保持声望升级。",
    "Maybe Yhvr's plan could work. You would be the ones setting them free.": "也许 Yhvr 的计划能够奏效。 你将是释放他们自由的人。",
    "Now is not the time. YOU must be the one to go there.": "现在还不是时候。 你一定是那个去那里的人。",
    "PLATONIC. He wanted me to use corruptions in the standard path.": "柏拉图式的。 他希望我在标准路径中使用腐败。",
    "pure energy.": "纯粹能量。",
    "The highest concentration of incremental developers.": "增量开发者最集中。",
    "They are dangerous... Very dangerous.": "他们很危险……非常危险。",
    "They want you to find the 28 LAYERS OF THE PRESTIGE TREE.": "他们希望您找到 28 层声望树。",
    "When I first met Yhvr not long ago, he was working really hard on galaxy.click": "不久前我第一次见到 Yhvr 时，他正在 Galaxy.click 上非常努力地工作",
    "Yhvr, Jacorb, and Aarex will explain more about this.": "Yhvr、Jacorb 和 Aarex 将对此进行更多解释。",
    "Log I: We have declared war on the death realm. I am scared, but I don't want to tell anyone. Aarex and ???????? seem to be calm though. The first war meeting is tomorrow. The high goddess of the backrooms will inform us on the details about this war. If you are reading this, we will meet very soon.": "日志 I：我们已向死亡领域宣战。 我很害怕，但我不想告诉任何人。 Aarex 和？？？？？？？ 虽然看起来很平静。 第一次战争会议将于明天举行。 幕后高位女神会告诉我们这场战争的详情。 如果您正在阅读本文，我们很快就会见面。",
    "Log II: The meeting was frightening. Hevipelle wanted to use ?????????? to obliterate the entire realm, but that is wrong. Me and Aarex pitched our own ideas. To build a weapon of great power, but without any destructive intents. This would stop the death realm from reaching the ??????????? weapon that we have locked up in the ???????? ?????. A lot of people agreed, but I had to start work tomorrow. A lot of battles would be raging, but I think I'll be fine.": "日志 II：会议令人恐惧。 Hevipelle 想要使用 ????????? 消灭整个领域，但这是错误的。 我和 Aarex 提出了我们自己的想法。 打造威力强大但没有任何破坏性意图的武器。 这将阻止死亡境界达到???????????? 我们锁在的武器？？？？？？？ ????。 很多人都同意，但我明天必须开始工作。 很多战斗会很激烈，但我想我会没事的。",
    "Log IV: It's hard to believe that the ???? ?? ??????????? are gone. After helping us make the ?????????? ??????, it seemed like they disappeared. I wish they would return someday. I was great friends with them. The high ruler of the void is sending more troops to battle. ???????? has been slacking off lately. ???? has been doing all of his work. I wonder what's going on with him. Is ??? ??? back?": "日志 IV：很难相信？？？ ?? ?????????? 消失了。 帮助我们制作后？？？？？？？？？？ ??????，他们好像消失了。 我希望他们有一天能回来。 我和他们是好朋友。 虚空的至高统治者正在派遣更多的军队参战。 ??????? 最近一直在懈怠。 ???? 一直在做他所有的工作。 我想知道他怎么了。 是 ？？？ ??? 后退？",
    "Another was this very path. A path to energize and to become powerful.": "另一个就是这条路。 一条充满活力和变得强大的道路。",
    "Don't stop. I don't want another failure.": "别停下来。 我不想再次失败。",
    "Energizers": "能量剂",
    "However, the power of a celestial stopped them.": "然而，天道之力阻止了他们。",
    "In the time between the predecessor and your arrival,": "在前任和你到来之间的时间里，",
    "It is the celestial of pure energy. It should be very easy.": "它是纯粹能量的天体。 这应该很容易。",
    "It wasn't so complicated.": "事情并没有那么复杂。",
    "It's about time I inform you about your predecessor.": "现在是我向您介绍您的前任的时候了。",
    "Just keep going. You will meet Aarex and Jacorb very very soon.": "尽管继续。 你很快就会见到 Aarex 和 Jacorb。",
    "Keep finding the 28 layers.": "继续寻找28层。",
    "Layer 1: Prestige": "第一层：声望",
    "Maybe you can make it through, once and for all.": "也许你可以一劳永逸地度过难关。",
    "Next reset, you will energize with \"Cheaper machines, more corruption.\"": "下次重置时，您将因“更便宜的机器，更多的腐败”而充满活力。",
    "Next reset, you will energize with \"Stronger prestige energy.\"": "下次重置时，您将获得“更强的声望能量”。",
    "Next reset, you will energize with nothing.": "下次重置时，你将一无所有地充满活力。",
    "One of these advancements was to shorten meta-prestiges.": "这些进步之一是缩短元声望。",
    "Prestige Energy's good effect is multiplied by 8, but its downside is squared.": "声望能量的良好效果是乘以8，但它的缺点是平方。",
    "Prestige machines scale less (x3 -> x1.5), but machine corruptions are squared.": "声望机器的规模较小（x3 -> x1.5），但机器损坏是平方的。",
    "The path of singularity.": "独特之路。",
    "The path your predecessor took. They made it through countless efforts.": "你的前任所走的路。 他们通过无数的努力才做到了这一点。",
    "This one celestial you will find at the end of this path is weak.": "你会发现这条路的尽头的这个天体很弱。",
    "Unlocks buyables.": "解锁可购买物品。",
    "Unlocks energizers.": "解锁能量。",
    "We have done long and strenuous research.": "我们进行了长期而艰苦的研究。",
    "We have found alternative celestials for growing power and strength.": "我们已经找到了可以增强力量和力量的替代天体。",
    "You are energizing with nothing.": "你什么都没有就充满活力。",
    "You are energizing with \"Stronger prestige energy.\"": "你正在以“更强的声望能量”来激励你。",
    "You are energizing with \"Cheaper machines, more corruption.\"": "你正在用“更便宜的机器，更多的腐败”来激励你。",
    "All of this could have been easily avoided. We were so naive.": "所有这一切本来是可以轻易避免的。 我们太天真了。",
    "Booster Synergy": "助推器协同作用",
    "Buyables": "可购买",
    "Corruption Delayer": "腐败延迟者",
    "Generator Synergy": "生成器协同",
    "If it wasn't for ????????, we would have been fine.": "如果没有????????，我们就没事了。",
    "Prestige Energy Amplifier": "声望能量放大器",
    "The time before the war was great. We were going to create our first hero.": "战争前的时光是美好的。 我们要创造我们的第一个英雄。",
    "Unlocks automation for prestige machines (in prestige tab).": "解锁声望机器的自动化（在声望选项卡中）。",
    "Unlocks enhancers. (Buyables tab).": "解锁增强器。 （可购买选项卡）。",
    "We were so close. Why did it have to happen?": "我们是如此亲密。 为什么它必须发生？",
    "Log X: Bad news. Our last battle was a big flop. The realms want to get ????????? from the dimensional realm to help them fight since we already lost a lot of soldiers. However, the dimensional realm has always stayed neutral. Aarex is feeling better now, so we kept on doing our work. Hope they don't find out about the ???????? ?????.": "日志 X：坏消息。 我们的最后一场战斗是一次重大失败。 领域想要得到？？？？？？？ 从次元领域来帮助他们战斗，因为我们已经损失了很多士兵。 然而，次元领域却始终保持着中立。 Aarex 现在感觉好多了，所以我们继续做我们的工作。 希望他们不要发现？？？？？？？ ????。",
    "Next reset, you will energize with \"More points, less prestige.\"": "下次重置时，您将获得“更多点数，更少声望”的能量。",
    "Log III: The first battle has been deadly. 80% of our soldiers died. The king of the void suggests we bring back the ???? ?? ???????????, but ???????? confirmed that they are gone. I believe him. I barely remember the last time I saw them. Aarex wants to begin working soon. I need to prepare.": "日志III：第一场战斗是致命的。 我们80%的士兵阵亡了。 虚空之王建议我们带回？？？ ?? ？？？？？？？？？？？， 但 ？？？？？？？？ 确认他们已经走了。 我相信他。 我几乎不记得上次见到他们是什么时候了。 Aarex 希望尽快开始工作。 我需要做好准备。",
    "\"In incremental games, prestige resets are when you reset the game for a benefit.": "“在增量游戏中，声望重置是指您为了获得利益而重置游戏。",
    "However, we must start from the beginning.": "然而，我们必须从头开始。",
    "Jacorb and Aarex were two of the four great nobles of incremental powers.": "Jacorb 和 Aarex 是增量力量四大贵族中的两位。",
    "Life will always be full of prestige resets. Make sure to do them.\" -Anonymous": "生活总是充满声望重置。 确保做到这些。\”-匿名",
    "Prestige points. The crudest form of prestige. Holds the entire tree together.": "声望点。 声望的最原始形式。 将整棵树固定在一起。",
    "Prestige Tree": "声望树",
    "Score Amplifier": "分数放大器",
    "The high god of the death realm seeks after this greatly.": "死亡领域的上位神非常追求这一点。",
    "The prestige tree: One of their creations. A creation of great power.": "声望树：他们的创作之一。 伟大力量的创造。",
    "Their contributions were great. Without them, things would never be the same.": "他们的贡献是巨大的。 没有他们，事情将永远不会一样。",
    "This can relate very well to real life. When you move to a new town, get a new job, graduating high school.": "这可以很好地与现实生活联系起来。 当你搬到一个新城镇，找到一份新工作，高中毕业。",
    "Standard Path Factors": "标准路径因子",
    "Prestige Tree Factors": "声望树因子",
    "Gain 100% of prestige points per second.": "每秒获得 100% 的声望点数。",
    "Enhance points. A crude form of jacorbian energy.": "增强点数。 jacorbian 能量的一种原始形式。",
    "Enhancers": "强化剂",
    "Log VIII: Hevipelle started working on his celestials. He planned on making two at the same time! He wanted to name them ???? and ?????. I'm glad that he is more enthusiastic about his work. Especially after what happened with the ??? ???. Hevi decided to use his own genetics for the celestials. In a way it would be like his children! I want to have celestials one day. That would be so cool.": "日志 VIII：Hevipelle 开始研究他的天体。 他打算同时做两个！ 他想给他们起名字？？？ 和 ？？？？？。 我很高兴他对工作更有热情了。 尤其是在 ??? 发生了什么事之后 ???. 海维决定将自己的基因用于天体。 从某种程度上来说，就像他的孩子一样！ 我希望有一天能拥有仙人。 那真是太酷了。",
    "Machine Automation": "机器自动化",
    "Until Delay": "直至延迟",
    "Off": "关",
    "On": "开",
    "Layer 2: Booster": "第 2 层：助推器",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Log VIII": "日志 VIII",
    "Log X": "日志 X",
    "Log I": "日志 I",
    "Log II": "日志 II",
    "Log III": "日志 III",
    "Log IV": "日志 IV",
    "QoL I": "生活质量 I",
    "QoL II": "生活质量 II",
    "Factor I": "因子 I",
    "Factor II": "因子 II",
    "Boost II": "提升 II",
    "Boost I": "提升 I",
    "SP Prestige Upgrade I": "SP 声望升级 I",
    "SP Prestige Upgrade II": "SP 声望升级 II",
    "SP Prestige Upgrade III": "SP 声望升级 III",
    "SP Prestige Upgrade IV": "SP 声望升级 IV",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "The Incremental God Tree\n\t\t\t\t\t\t\tDiscord": "The Incremental God Tree\n\t\t\t\t\t\t\tDiscord",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    'v1.0b': 'v1.0b',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "TOTAL SCORE: ": "总分数: ",
    "YOUR SCORE: ": "你的分数: ",
    "Your machines cause there to be ": "你的机器导致有 ",
    "Current corruption delay: ": "当前腐败延迟：",
    "which divides prestige energy downside by ": "它将声望能量的 负面影响 除以 ",
    "Points are multiplied by x100,000, while prestige points are divided by ": "点数乘以 x100,000，而声望点则除以 ",
    "Pure Energy Upgrade ": "纯粹能量升级 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    " to points.": " 到 点数。",
    " to prestige points.": " 到 声望点数。",
    " to incremental energy.": " 到 增量能量。",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\/([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\/([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^\(([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^\(([\d\.]+)e([\d\.,]+)$/,
    /^\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = []

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) points per second.$/, '你每秒获得 $1 点数。'],
    [/^which are boosting points by x(.+).\n(.+)Cost: (.+) Prestige Points$/, '提升点数 x$1。\n 成本：$3 声望点数'],
    [/^which are boosting points by x(.+).\n(.+)Cost: (.+) Points$/, '提升点数 x$1。\n 成本：$3 点数'],
    [/^which are boosting booster energy by x(.+).\n(.+)Cost: (.+) Generator Energy$/, '提升 助推器能量 x$1。\n 成本：$3 生成器能量'],
    [/^which are boosting generator energy by x(.+).\n(.+)Cost: (.+) Booster Energy$/, '提升 生成器能量 x$1。\n 成本：$3 助推器能量'],
    [/^which are boosting prestige energy gain and dividing the downside by x(.+).\n(.+)Cost: (.+) Generator Energy$/, '提升 声望能量增益并将负面影响除以 x$1。\n 成本：$3 生成器能量'],
    [/^which are multiplying score by (.+).\n(.+)Cost: (.+) Incremental Power$/, '将分数乘以 $1。\n$2成本：$3 增量力量'],
    [/^which are producing (.+) points per second.\n(.+)Cost: (.+) Points$/, '每秒生产 $1 点数。\n$2成本：$3 点数'],
    [/^which are producing (.+) prestige Energy per second.\n(.+)Cost: (.+) Prestige Points$/, '每秒生产 $1 声望能量。\n$2成本：$3 声望点数'],
    [/^which are producing (.+) prestige energy per second.\n(.+)Cost: (.+) Prestige Points$/, '每秒生产 $1 声望能量。\n$2成本：$3 声望点数'],
    [/^which are producing (.+) booster energy per second.\n(.+)Cost: (.+) Pure Energy$/, '每秒生产 $1 助推器能量。\n$2成本：$3 纯粹能量'],
    [/^which are boosting prestige points and pure, prestige, generator, and booster energy by (.+).\n(.+)Cost: (.+) Pure Energy$/, '将声望点和纯净、声望、发电机和助推器能量提高 $1。\n$2成本：$3 纯粹能量'],
    [/^which are producing (.+) generator energy per second.\n(.+)Cost: (.+) Pure Energy$/, '每秒生产 $1 生成器能量。\n 成本：$3 纯粹能量'],
    [/^You can own (.+) prestige machines before corruptions spawn.\n(.+)Cost: (.+) Booster Energy$/, '在腐败产生之前，您可以拥有 $1 声望机器。\n$2成本：$3 助推器能量'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^You have (.+) points.$/, '你有 $1 点数。'],
    [/^You have (.+) incremental energy.$/, '你有 $1 增量能量。'],
    [/^You have (.+) incremental power.$/, '你有 $1 增量力量。'],
    [/^Your incremental energy give a (.+) boost to points and prestige energy.$/, '您的 增量力量 可以使 点数 和 声望能量 提升 $1。'],
    [/^Your prestige machines will give you (.+) incremental energy on reset.$/, '您的声望机器将在重置时为您提供 $1 增量能量。'],
    [/^which gives a (.+) boost to prestige points gain.$/, '这使得 声望点数 增益提高了 $1。'],
    [/^which gives a (.+) boost to prestige energy gain.$/, '这使得 声望能量 增益提高了 $1。'],
    [/^which gives a (.+) boost to point gain.$/, '这使得 点数 增益提高了 $1。'],
    [/^which gives a (.+) boost to points gain.$/, '这使得 点数 增益提高了 $1。'],
    [/^You are gaining (.+)$/, '你获得 $1'],
    [/^but a (.+) divide on point gain.$/, '但点数增益 $1。'],
    [/^Best pure energy: (.+)$/, '最佳纯粹能量：$1'],
    [/^Best prestige energy: (.+)$/, '最佳声望能量：$1'],
    [/^Score amplifier: (.+)$/, '分数放大器：$1'],
    [/^Time played: (.+)$/, '游戏时长：$1'],
    [/^You have (.+)$/, '你有 $1'],
    [/^Best points: (.+) base score$/, '最佳分数：$1 基础分数'],
    [/^Activate the standard path \(Req: (.+) PP\)$/, '激活标准路径（要求：$1 声望点数）'],
    [/^LEARN YOUR TRUE PURPOSE \(Req: (.+) PP\)$/, '了解您的真正目的（要求：$1 声望点数）'],
    [/^Next at (.+) score$/, '下一个在 $1 分数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^which causes the prestige energy downside to be (.+) stronger.$/, '这会导致声望能量的负面影响增强 $1。'],
    [/^which gives a (.+) boost to prestige energy and prestige point gain.$/, '这使声望能量和声望点数增益提高了 $1。'],
    [/^You will gain (.+)$/, '你会获得 $1'],
    [/^([\d\.]+)\/sec$/, '$1\/秒'],
    [/^([\d\.,]+)\/sec$/, '$1\/秒'],
    [/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
    [/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
    [/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^\+(.+) PP$/, '\+$1 声望点数'],
    [/^\+(.+) PE$/, '\+$1 纯粹能量'],
    [/^Cost: (.+) Pure Energy$/, '成本：$1 纯粹能量'],
    [/^Cost: (.+) Prestige Points$/, '成本：$1 声望点数'],
    [/^Cost: (.+) Incremental Power$/, '成本：$1 增量力量'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) Booster Energy$/, '要求：$1 助推器能量'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) prestige points.$/, '要求：$1 声望点数。'],
    [/^Req: (.+) prestige points$/, '要求：$1 声望点数'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],
    [/^(.+) Incremental Power$/, '$1 增量力量'],

]);