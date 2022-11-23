import type { NextPage } from 'next';
import type { CompileResult } from '@hizollo/hzscript';
import { Compiler } from '@hizollo/hzscript';
import { SyntheticEvent, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Header from '@/components/head';
import {
	Box,
  Button, 
	Grid,
	Tabs,
	Tab,
	TextareaAutosize,
	Typography
} from '@mui/material';

const compiler = new Compiler({
  includes: {
    core: 'code:const node=document.getElementById("result-2");function _start(){node.innerText="";};function _write(text){node.innerText+=String(text);};function _end(){}'
  }, 
  disabledFunctions: ['eval']
});

const HZScript: NextPage = () => {
	const [code, setCode] = useState("<<< \"Hello, world!\"");
	let result = compiler.compile(code);

	const handleChange = (event: SyntheticEvent) => {
    // @ts-ignore
    setCode(event.target.value ?? '');
  };

  useEffect(() => {
    result = compiler.compile(code);
  }, [code])

	return (
    <>
      <Header 
        title="HiZollo Script 線上測試區"
        description="這裡是 HiZollo Script 的線上測試區，你可以在這邊測試 HiZollo Script 的全部功能。"
      />
      <h1>HiZollo Script 線上測試區</h1>
  		<Grid container spacing={3}>
  			<Grid item xs={6}>
    			<TextareaAutosize 
  					style={{ width: '100%', height: 500 }} 
  					id="script-input"
  					value={code}
  					onChange={handleChange}
  				/>
  			</Grid>
  			<Grid item xs={6}>
  				<Output result={result} />
  			</Grid>
  		</Grid>
    </>
	)
}

interface OutputProps {
	result: CompileResult
}

function Output({ result }: OutputProps) {
	const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const n = document.getElementById("result-2");
    if(value == 2 && !result.errorCount) try {
      eval(result.build.full);
    } catch(e) {
      n!.innerText = (e as Error).toString();
    }
    else {
      // @ts-ignore
      const root = ReactDOM.createRoot(n);
      root.render(<CompileErrorText />, n);
    }
  }, [value, result]);

	return (
		<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
        	value={value} 
        	onChange={handleChange} 
        	aria-label="compile-result"
        	textColor="inherit"
        	TabIndicatorProps={{ style: { background: '#94B4FA' }}}
        >
          <Tab label="編繹器輸出" />
          <Tab label="建碼" />
          <Tab label="執行結果" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <pre>
          {result.errorMessages.textify}

          編譯結束，錯誤數量：{result.errorCount}
        </pre>
      </TabPanel>
      <TabPanel value={value} index={1}>
        { result.errorCount ? <CompileErrorText /> :
          <SyntaxHighlighter
            language="javascript"
            wrapLongLines
          >
            {result.build.full}
          </SyntaxHighlighter>
        }
      </TabPanel>
      <TabPanel value={value} index={2} id="execute-result">
        <pre>
          {result.errorCount ? <CompileErrorText /> : ''}
        </pre>
      </TabPanel>
    </Box>
	)
}

function CompileErrorText() { return <p style={{ fontSize: '25px', color: '#FF6666' }}>編譯錯誤！</p>; }

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  id?: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`result-${index}`}
      aria-labelledby={`result-${index}`}
      style={{ overflowWrap: 'anywhere', whiteSpace: 'pre-wrap', padding: '10px' }}
    >
      {children}
    </div>
  );
}

interface ButtonProps {
  text: string;
  handleClick: () => void;
}

function TopButton({ text, handleClick }: ButtonProps) {
  return (
    <Grid item xs={6}>
      <Button
        variant="contained"
        disableElevation
        onClick={handleClick}
        sx={{
          backgroundColor: '#5484FA',
          height: { xs: 40 },
          width: { xs: '100%' },
          fontSize: { xs: 14, md: 18 },
          px: { xs: 3 },
        }}
      >{text}</Button>
    </Grid>
  )
}

export default HZScript;
