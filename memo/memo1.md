```bash
cd section1

# package.json 생성 (전부 엔터로 설치해도 됨)
npm init

# typescript가 여러가지 인식 가능하게 하는 모듈
npm i @types/node

# typescript comfiler
sudo npm install typescript -g

# 설치 확인
tsc -v

# 컴파일
tsc src/index.ts 

# 생성한 js 실행
node src/index.js

# ts를 js로 컴파일 하지 않고 즉시 실행 가능하게 하는 모듈
# ts-node는 Node 20 버전 이상에서는 더 이상 동작하지 않는다. tsx를 사용할 것
sudo npm install ts-node -g  
sudo npm i -g tsx

# 컴파일 없이 즉시 실행
ts-node src/index.ts 
tsx src/index.ts

# tsconfig.json 생성
tsc --init
```