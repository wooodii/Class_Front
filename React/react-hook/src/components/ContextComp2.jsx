// context의 value 값을 공용으로 쓰기위해서
// 파일을 따로 작성하여 모듈로 사용
// 현재의 파일 이름과 export의 이름을 다르게 사용한 이유
// : 하나에 여러개의 컴포넌트를 내보내고 있기에 이름을 사용에 맞게 다르게 사용

import React from "react";
// 필요한 context들을 하나의 js 파일에 모아서 사용
// count와 관련된 Context
export const CountContext = React.createContext(null);

// Num과 관련된 Context
export const NumContext = React.createContext(null);