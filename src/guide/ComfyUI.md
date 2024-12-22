# ComfyUI:StableDiffusion模块化工作流GUI
## 安装教程
1. 部署[Git](https://github.com/git-for-windows/git/releases)
- 若下载Installer则直接按步骤安装
- 若下载Portable则先解压把根目录下的bin加入环境变量PATH中
2. 部署[ComfyUI](https://www.comfy.org)
- [ComfyUI Desktop](https://dl.todesktop.com/241012ess7yxs0e/windows/nsis/x64)：按照步骤安装即可
- [ComfyUI Portable](https://github.com/comfyanonymous/ComfyUI)：解压7z，运行根目录下的run_nvidia_gpu.bat，若无NVIDIA显卡则运行run_cpu.bat
3. 访问ComfyUI
- ComfyUI Desktop可直接从窗口使用
- 两个版本均可浏览器访问[8000端口](http://localhost:8000)
## 节点(custom_nodes)
### ComfyUI-Manager(自定义节点管理)
- ComfyUI Desktop自带
- 使用Git命令手动安装
```shell
cd ./comfyui/custom_nodes
git pull https://github.com/ltdrdata/ComfyUI-Manager.git
```
### AIGODLIKE-COMFYUI-TRANSLATION(界面翻译)
- 安装后需进入设置-AGL-Locale-AGLTranslation-langualge调整语言
## 模型(models)

## 工作流

## 推荐教程
- https://github.com/602387193c/ComfyUI-wiki