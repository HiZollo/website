import type { NextPage } from 'next';
import Head from 'next/head';

const Tos: NextPage = () => {
  return (
    <>
      <Head>
        <title>Junior HiZollo｜用戶條款</title>
      </Head>
      <h1>用戶條款</h1>
      在你使用 Junior HiZollo 前，請詳閱此用戶條款，將 Junior HiZollo 邀請至你的伺服器或使用 Junior HiZollo 的指令後，即代表你同意此用戶條款的內容。
      如果對此用戶條款有任何疑問，可以詢問 HiZollo 的開發團隊。

      <h2>一、名詞解說</h2>
      <ul>
        <li>HiZollo：Junior HiZollo，在 Discord 中用戶名稱#TAG 為 Junior HiZollo#3190 的機器人帳號。</li>
        <li>本條款：Junior HiZollo 機器人使用條款，你現在正在讀的東西。</li>
        <li>使用者：泛指所有使用 HiZollo 任何指令的用戶。</li>
        <li>後臺伺服器：名稱為「HiZollo 機器人 後台支援伺服器」的伺服器，由開發團隊所管理。</li>
        <li>開發團隊成員：在後臺伺服器中，擁有「團隊成員」身份的 Discord 用戶。</li>
      </ul>

      <h2>二、資料的取得與保護</h2>
      <ul>
        <li>開發團隊成員可以取得使用者 ID、使用的指令與輸入的參數。這些資訊僅供統計及除錯用途，開發團隊成員不會將它提供給測試員以外的人，也不會利用它違法亂紀。</li>
        <ul>
          <li>伺服器的管理者在有適當理由的情況下，可以向團隊成員申請查看一個星期內的使用紀錄。但查看範圍僅限該伺服器成員的使用紀錄，且理由須經團隊成員審核通過。</li>
        </ul>
        <li>建議（<code>/suggest</code>）／錯誤回報（<code>/bug</code>）會回傳此項下方所列出的資料，這些資料會公開並保存於後臺伺服器的建議區／錯誤回報區。這些資料不被視為須保護的資料，可以被任何在後臺伺服器中的用戶查看。</li>
        <ul>
          <li>使用者名稱（含 Tag）</li>
          <li>使用者 ID</li>
          <li>使用者所在的伺服器名稱（及其 ID）</li>
          <li>使用指令時間</li>
          <li>建議／錯誤回報內容</li>
        </ul>
        <li>運行 HiZollo 的主機設有防火牆、防毒系統等維護資訊安全所必要的設施，且使用者的資料會由開發團隊成員嚴格保護，除了開發團隊成員及通過申請的伺服器管理員以外，任何人皆無法取得。</li>
      </ul>

      <h2>三、外部連結</h2>
      <ul>
        <li>HiZollo 的某些指令會提供外部連結，該連結所屬的網站並不受本條款規範，此時使用者應參考該連結網站所設立的使用者條款。</li>
      </ul>

      <h2>四、違規事宜</h2>
      <ul>
        <li>如果有使用者利用 HiZollo 觸犯使用者所屬伺服器的規定，或是使用者所屬地區的法規，HiZollo 及其開發團隊成員並不會承擔任何責任。</li>
      </ul>

      <h2>五、條款的修正</h2>
      <ul>
        <li>本條款會因應需求而隨時進行修正，任何的修正動作皆會以公告指令（<code>/announcement</code>）通知使用者。</li>
      </ul>
    </>
  );
}

export default Tos;
