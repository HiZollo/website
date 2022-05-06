import type { NextPage } from 'next';
import Link from 'next/link'
import Header from '../../components/head';
import { TutorialNav, TutorialImage, TutorialWrap }from '../../components/tutorial';

import invite1 from '../../public/tutorials/invite/1.png';
import invite2 from '../../public/tutorials/invite/2.png';

const Invite: NextPage = () => {
  return (
    <>
      <Header title="使用教學：邀請 HiZollo" description="這裡是 HiZollo 的使用教學，如果你不知道怎麼使用 HiZollo，或是你想發揮 HiZollo 全部的功能，你一定要看這裡。" />
      <TutorialWrap>
      <h1>邀請 HiZollo</h1>
        要使用 HiZollo 的第一步就是邀請 HiZollo 加入你的伺服器！<br />
        你可以使用這個連結來邀請 HiZollo：<Link href="/invite"><a>https://hizollo.ddns.net/invite</a></Link><br />
        點擊這個連結後，會在新分頁開啟 Discord 的驗證畫面：<br />
        <TutorialImage src={invite1} alt="HiZollo 的邀請畫面" height={600} />
        請先選取你要加入的伺服器，之後按下繼續，會來到選擇權限的部分，我們建議你全數開啟，這樣才能享用 HiZollo 完整的功能。<br />
        當然，如果你不想要也可以關掉部分權限，但請記得一定要留下「讀取訊息」跟「發送訊息」，不然是會無法使用的。<br />
        <TutorialImage src={invite2} alt="授權按鈕" height={300} />
        當你選取完畢後，請按下授權，這樣一來你就成功把 HiZollo 邀請到你指定的伺服器了！
      </TutorialWrap>
      <TutorialNav />
    </>
  );
}

export default Invite;
