# Monkey-Trainer

使用OCR在小猿口算中进行比大小

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

  <h3 align="center">Monkey Trainer</h3>
  <p align="center">
    当你还在费尽大脑时，电脑已快您一步。
    <br />
    <a href="https://github.com/nullsora/monkey-trainer"><strong>探索本项目 »</strong></a>
    <br />
    <br />
    <a href="https://github.com/nullsora/monkey-trainer/issues">报告Bug</a>
    ·
    <a href="https://github.com/nullsora/monkey-trainer/issues">提出新特性</a>
  </p>


 本篇README.md面向开发者

## 目录

- [上手指南](#上手指南)
  - [开发前的配置要求](#开发前的配置要求)
  - [安装步骤](#安装步骤)
- [使用到的框架](#使用到的框架)
- [贡献者](#贡献者)
  - [如何参与开源项目](#如何参与开源项目)
- [版本控制](#版本控制)
- [作者](#作者)

### 上手指南

###### 开发前的配置要求

1. 确保您已下载过tesseract及其英文识别包，并将其添加进环境变量
2. 准备好NodeJS以及npm (Yarn is better)
3. 可以运行小猿口算并可使用鼠标操作的窗口 (如安卓模拟器)

###### **安装步骤**

1. 克隆本仓库

   ```sh
   git clone https://github.com/nullsora/monkey-trainer.git
   cd ./monkey-trainer
   ```

2. 安装依赖

   ```sh
   yarn
   ```

3. 修改`config.json`

   您的`config.json`最终应该如下：

   ```json
   {
     "scale": 1.75, // 屏幕缩放倍数
     "window": {
       "top": 56, // 小猿口算窗口左上角距屏幕顶部像素（不包含窗口边框，下同）
       "left": 0, // 小猿口算窗口左上角距屏幕左侧像素
       "width": 816, // 窗口宽度
       "height": 1458 //窗口高度
     },
     "screenshotPath": "./screenshots" // 屏幕截图缓存存放位置
   }
   ```

4. 启用脚本

   ```sh
   yarn start
   ```

​	请在胜利/失败/平局页面启动，或启动后立刻点击开始。
​	注意：脚本速度约为0.53s/题，请不要和抓包以及改数据的天龙人作比较。

### 使用到的框架

- [nutjs](https://nutjs.dev/)
- [node-tesseract-ocr](https://www.npmjs.com/package/node-tesseract-ocr)

### 贡献者

请阅读**CONTRIBUTING.md** 查阅为该项目做出贡献的开发者。

#### 如何参与开源项目

贡献使开源社区成为一个学习、激励和创造的绝佳场所。你所作的任何贡献都是**非常感谢**的。

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 版本控制

该项目使用Git进行版本管理。您可以在repository参看当前可用版本。

### 作者

cloudweave@outlook.com

 *您也可以在贡献者名单中参看所有参与该项目的开发者。*

### 版权说明

该项目签署了MIT 授权许可，详情请参阅 [LICENSE](https://github.com/nullsora/monkey-trainer/blob/main/LICENSE)

<!-- links -->

[your-project-path]: nullsora/monkey-trainer
[contributors-shield]: https://img.shields.io/github/contributors/nullsora/monkey-trainer.svg?style=flat-square
[contributors-url]: https://github.com/nullsora/monkey-trainer/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nullsora/monkey-trainer.svg?style=flat-square
[forks-url]: https://github.com/nullsora/monkey-trainer/network/members
[stars-shield]: https://img.shields.io/github/stars/nullsora/monkey-trainer.svg?style=flat-square
[stars-url]: https://github.com/nullsora/monkey-trainer/stargazers
[issues-shield]: https://img.shields.io/github/issues/nullsora/monkey-trainer.svg?style=flat-square
[issues-url]: https://img.shields.io/github/issues/nullsora/monkey-trainer.svg
[license-shield]: https://img.shields.io/github/license/nullsora/monkey-trainer.svg?style=flat-square
[license-url]: https://github.com/nullsora/monkey-trainer/blob/main/LICENSE