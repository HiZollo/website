import type { NextPage } from 'next';
import Link from 'next/link'
import Header from '../../components/head';
import { TutorialNav, TutorialImage, TutorialWrap } from '../../components/tutorial';

import commands1 from '../../public/tutorials/commands/1.png';
import commands2 from '../../public/tutorials/commands/2.png';
import commands3 from '../../public/tutorials/commands/3.png';
import commands4 from '../../public/tutorials/commands/4.png';


const Invite: NextPage = () => {
  return (
    <>
      <Header title="使用教學：指令清單與一般指令" description="這裡是 HiZollo 的使用教學，如果你不知道怎麼使用 HiZollo，或是你想發揮 HiZollo 全部的功能，你一定要看這裡。" />
      <TutorialWrap>
      <h1>指令清單與一般指令</h1>
        <h2>指令清單</h2>
        當你成功<Link href="/tutorials/invite"><a>邀請 HiZollo</a></Link> 參與你的派對後，下一步便是開始使用了。<br />
        首先你會需要先叫出 HiZollo 的指令清單，要做到這點，你只需要在頻道中輸入 <code>z!help</code> 就可以了：<br />
        <TutorialImage src={commands1} alt="HiZollo 的指令列表" height={350} />
        這個指令清單上列著 HiZollo 全部的指令，你也可以在<Link href="/commands"><a>指令列表</a></Link>這頁上查看所有指令更詳細的用法。<br />

        <h2>指令使用</h2>
        列表上，每個指令都由兩個部分組成，也就是「指令前綴」和「指令名稱」，這同時也是你使用指令的方法。<br />
        我們拿 ping 指令舉例，「指令前綴」是固定的，也就是 <code>z!</code>，在使用指令時都需要在最前方加上這個，HiZollo 才會知道你在呼叫他的指令。然後你要接上指令名稱，也就是變成 <code>z!ping</code>。請在訊息框輸入這條指令並且發送，恭喜你，你成功執行了一個 HiZollo 的指令！
        <TutorialImage src={commands2} alt="ping 指令使用範例" height={120} />
        <h2>附上參數</h2>
        有些指令在使用上是需要附上「參數」的，例如 choose 指令，當你直接按照上一節方式使用時，會看到以下訊息：
        <TutorialImage src={commands3} alt="choose 指令使用範例" height={210} />
        下面寫的這個用法告訴你，z!choose 是必須附上參數的指令，參數就是指在基本用法後，使用空格隔開的字串。<br />
        例如 <code>z!choose 參數1 參數2 參數3</code> 這個樣子。有關使用方法中的中括號（[]）和角括號（&lt;&gt;）的意義，<br />
        會在下一節的「<Link href="/tutorials/command-help"><a>指令用法的查詢</a></Link>」中說明。<br />
        只要先知道輸入參數時不用連著括號一起輸入就好了。<br />
        我們來看看附上參數後的樣子：<br />
        <TutorialImage src={commands4} alt="i choose kotoha" height={170} />

        這樣一來，你就學會了如何使用必須附上參數的指令了。
      </TutorialWrap>
      <TutorialNav />
    </>
  );
}

export default Invite;
