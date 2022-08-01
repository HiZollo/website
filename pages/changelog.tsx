import type { NextPage } from 'next';
import Header from '../components/head';

import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
const { DiscordMarkdown } = require('@discord-message-components/react');

import changelog from '../data/changelog.json';

import style from '../styles/Changelog.module.css';

interface TabPanelProps {
  children?: React.ReactNode;
  prefix: string;
  index: string;
  value: string;
}

type ChangelogTextData = string | ChangelogTextData[];

interface ChangelogStructure {
  [key: string]: {
    [key: string]: {
      date: [number, number, number],
      data: ChangelogTextData[]
    }
  } | { prefix: string }
}

const Changelog: NextPage = (props) => {
  // 建立用來儲存所有 tabber 的 state 的物件
  const states: { [key: string]: any[] } = {};

  // 建立所有 tabber
  const tabbers = Object.keys(changelog).map(function (this: ChangelogStructure, value, index) {
    // 版本名稱的 prefix
    const { prefix: nowVersionPrefix } = this[value];
    // 該版本的最新版本
    let firstValue: string = '';

    // 建立 tabber 的 tab
    const tabs = Object.keys(this[value])
      // 先排序
      .sort((a, b) => {
        return a > b ? -1 : 1
      })
      // 製造 tab
      .map((value, index) => {
        if (value === "prefix") return;
        if (index == 1) firstValue = value;
        return <Tab value={value} key={index} label={`${nowVersionPrefix}${value}`} />;
      })
      .filter(v => v);

    // 在儲存 state 的物件中新增這個版本的 tabber 狀態
    const [nowValue, setNowValue] = states[value] = React.useState(firstValue); // eslint-disable-line

    // 製造內容
    const contents = Object.keys(this[value])
      // 先排序
      .sort((a, b) => {
        return a > b ? -1 : 1
      })
      // 創建內容
      .map(function (this: { [key: string]: {
        date: [number, number, number],
        data: ChangelogTextData[]
      } }, value, index) {
        // 如果是版本名稱前綴就先結束
        if (value === "prefix") return;

        // 獲取更新的日期以及內容
        const { date, data } = this[value];

        // 解析內容的函式
        function resolveChangelogText(d: ChangelogTextData[]) {
          // 拆解
          return d.map((value, index) => {
            return typeof value === 'string'
              // 如果是字串就回傳單一 list
              ? <li className={style['cl-li']}key={index}>{value}</li>
              // 否則建立新的一層
              : <ul className={style['cl-ul']} key={index}>{resolveChangelogText(value)}</ul>;
          });
        }

        // 回傳內容
        return (
          <TabPanel prefix={nowVersionPrefix as string} value={nowValue} index={value} key={index}>
            <strong>{date[0]} 年 {date[1]} 月 {date[2]} 日</strong>
            <ul className={style['cl-ul']}>
              {resolveChangelogText(data)}
            </ul>
          </TabPanel>
        );
      }, this[value]);

    // 將上下組合起來變成完整的 tabber 並回傳
    return (
      <React.Fragment key={value}>
        <h2>{value}</h2>
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={nowValue}
            onChange={(event: React.SyntheticEvent, newValue: string) => {
              setNowValue(newValue);
            }}
            key={value}
            textColor="inherit"
            variant="scrollable"
            aria-label={value}
            TabIndicatorProps={{ style: { background: '#94B4FA' }}}
            selectionFollowsFocus
          >
            {tabs}
          </Tabs>
          {contents}
        </Box>
      </React.Fragment>
    );
  }, (changelog as ChangelogStructure))

  return (
    <>
      <Header
        title = "更新日誌"
        description = "這是 HiZollo 的更新日誌，來回顧 HiZollo 的歷史吧！"
      />
      <h1>HiZollo 的更新日誌</h1>
      這是 HiZollo 的更新日誌，你可以在這裡看到 HiZollo 歷來所有更新內容及更新時間。
      {tabbers}
    </>
  )
}

function TabPanel(props: TabPanelProps) {
  const { children, value, prefix, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${prefix}${index}`}
      aria-labelledby={`${prefix}${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} style={{ borderTop: '1px solid #FFFFFF55' }}>
          {children}
        </Box>
      )}
    </div>
  );
}


export default Changelog;
