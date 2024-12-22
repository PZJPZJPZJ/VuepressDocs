# Windows:系统下载地址与安装流程
## 下载链接
### Windows XP
x86
```
ed2k://|file|zh-hans_windows_xp_professional_with_service_pack_3_x86_cd_x14-80404.iso|630239232|CD0900AFA058ACB6345761969CBCBFF4|/
```
### Windows Vista
x86
```
ed2k://|file|cn_windows_vista_enterprise_with_sp2_x86_dvd_x15-40257.iso|2348410880|A567A6C970038233C0B2B7F130ADEF23|/
```
x64
```
ed2k://|file|cn_windows_vista_enterprise_with_sp2_x64_dvd_x15-40402.iso|3104415744|D0CF708192BF9596CC603DF53ABDB76D|/
```
### Windows 7
x86
```
magnet:?xt=urn:btih:585DF592DE43A067C75CFE5A639B41FC3F24DA6F&dn=cn_windows_7_ultimate_with_sp1_x86_dvd_u_677486.iso&xl=2653276160
```
x64
```
magnet:?xt=urn:btih:E86414F638E11104248108B155BE9408A8362509&dn=cn_windows_7_ultimate_with_sp1_x64_dvd_u_677408.iso&xl=34205573124
```
### Windows 8
x86
```
ed2k://|file|cn_windows_8_enterprise_x86_dvd_917682.iso|2597502976|7B6541942A16EB54BC81E84558DF09DF|/
```
x64
```
ed2k://|file|cn_windows_8_enterprise_x64_dvd_917570.iso|3560837120|8CAE8064C4B8F9CD84941B4FF4A34722|/
```
### Windows 8.1
x86
```
ed2k://|file|cn_windows_8.1_enterprise_with_update_x86_dvd_6050645.iso|3199901696|0209A1FDE82A5AC7A248B4CA3F860F2B|/
```
x64
```
ed2k://|file|cn_windows_8.1_enterprise_with_update_x64_dvd_6050374.iso|4317065216|AC8215A13817CC0EC4EA42E5C92E88B7|/
```
### Windows 10
x86
```
magnet:?xt=urn:btih:9aa435b8c71fa2a85a3df83d5b33e385727ae5d5&dn=zh-cn_windows_10_consumer_editions_version_22h2_updated_oct_2024_x86_dvd_d0cfb2e9.iso&xl=5049681920
```
x64
```
magnet:?xt=urn:btih:f5001d461ae74a2833b0cbe6d768b06f436443bc&dn=zh-cn_windows_10_consumer_editions_version_22h2_updated_oct_2024_x64_dvd_d0cfb2e9.iso&xl=7167156224
```
arm64
```
magnet:?xt=urn:btih:1254374ee4000b9e8fed508fe2fdcdd8f49c2161&dn=SW_DVD9_Win_Pro_10_22H2.3_64ARM_ChnSimp_Pro_Ent_EDU_N_MLF_X23-36949.ISO&xl=5333610496
```
### Windows 11
x64
```
magnet:?xt=urn:btih:2fc6fc24f7d56d1def32ae0334d2df0cd3b855ea&dn=zh-cn_windows_11_consumer_editions_version_24h2_x64_dvd_bfc0d79b.iso&xl=5829044224
```
arm64
```
magnet:?xt=urn:btih:7aa30070e35c2e38491a7f7addb014623818f2e5&dn=zh-cn_windows_11_consumer_editions_version_24h2_arm64_dvd_4b5c8070.iso&xl=5674188800
```
## 安装步骤
### 直接使用镜像安装
#### 使用WindowsPC辅助安装准备
1. 工具准备
- 大于8G的U盘或硬盘
- 正常开机的电脑
- 官方ISO镜像
2. 使用DiskGenius选择U盘分区方案
- 推荐转换为MBR分区
    - 仅支持Legacy启动的电脑（约2010年前）
    - 支持UEFI启动的电脑
- 转换为GPT分区
    - 支持UEFI启动的电脑
    - 有多于4个分区或多EFI启动的需求
3. 使用DiskGenius格式化U盘
- 格式化为FAT32格式
    - 仅支持Legacy启动的电脑（约2010年前）
    - 仅支持FAT32分区UEFI启动的电脑（约2015年前）
    - U盘有其他特殊设备用途（旧版安卓或传统设备使用）
- 推荐格式化为ExFAT
    - 写入设备为U盘
    - 支持从任意格式分区UEFI启动的电脑
    - 镜像内单文件超过4G
- 格式化为NTFS
    - 写入设备为硬盘
#### 使用Android手机辅助安装准备
1. 工具准备
- 大于8G的U盘或硬盘
- 能使用OTG功能的手机
- 官方ISO镜像
2. 使用OTG转接头或手机接口U盘插入手机
3. 确认U盘格式
- FAT32为默认安卓格式化格式
    - 适用于所有支持UEFI启动的电脑
- ExFAT或NTFS
    - 不适用于仅支持从FAT32分区UEFI启动的电脑
- FAT16
    - 仅适用于特殊情况的UEFI启动
4. 使用解压软件或自带文件管理解压ISO到U盘根目录
- 确保EFI文件夹在U盘根目录
5. 解压完成在下拉状态栏或设置安全弹出U盘
- 安卓设备往往写入会使用缓存，安全弹出能确保写入已完成
### 使用WindowsPE系统辅助安装
