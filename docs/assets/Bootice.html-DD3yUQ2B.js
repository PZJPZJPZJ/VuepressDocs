import{_ as a,c as l,a as i,o as t}from"./app-DIUyYbrm.js";const o={};function n(r,e){return t(),l("div",null,e[0]||(e[0]=[i('<h1 id="bootice-启动引导编辑工具" tabindex="-1"><a class="header-anchor" href="#bootice-启动引导编辑工具"><span>Bootice:启动引导编辑工具</span></a></h1><h2 id="下载地址" tabindex="-1"><a class="header-anchor" href="#下载地址"><span>下载地址</span></a></h2><ul><li><a href="https://lon-01.dlo4d.com/files/bootice/BOOTICE_2016.06.17_v1.3.4.0.zip" target="_blank" rel="noopener noreferrer">Bootice</a></li></ul><h2 id="配置教程" tabindex="-1"><a class="header-anchor" href="#配置教程"><span>配置教程</span></a></h2><h3 id="物理磁盘" tabindex="-1"><a class="header-anchor" href="#物理磁盘"><span>物理磁盘</span></a></h3><h4 id="主引导记录mbr" tabindex="-1"><a class="header-anchor" href="#主引导记录mbr"><span>主引导记录MBR</span></a></h4><blockquote><p>磁盘开始的512个字节</p></blockquote><h4 id="分区引导记录pbr" tabindex="-1"><a class="header-anchor" href="#分区引导记录pbr"><span>分区引导记录PBR</span></a></h4><blockquote><p>分区开始的区域</p></blockquote><h4 id="分区管理" tabindex="-1"><a class="header-anchor" href="#分区管理"><span>分区管理</span></a></h4><ol><li>进入重新分区选择USB-HDD模式</li><li>建议将第一个分区选择ExFAT(闪存盘)或NTFS(机械硬盘和固态硬盘),分配最大存储空间，留下合适的给第二个分区</li><li>建议将第二个分区选择FAT32(推荐)或FAT16(旧机型)，分配300MB(仅存放引导配置时建议分配)或1GB及以上(存放PE系统wim镜像时建议分配) <ul><li>若使用FAT16分区格式，当第一个分区超过128G时，后面分区常出现无法引导情况</li></ul></li><li>建议选择MBR分区表类型以兼容所有启动类型 <ul><li>Legacy启动：从MBR磁盘的活动分区（BIOS启动兼容的文件系统，通常为FAT32）启动</li><li>UEFI启动：从MBR或GPT磁盘的任意包含EFI文件夹与efi启动文件的文件系统启动</li></ul></li><li>成功分区后，选择第二个分区(FAT32或FAT)点击激活按钮，设置为活动分区</li></ol><h3 id="bcd编辑" tabindex="-1"><a class="header-anchor" href="#bcd编辑"><span>BCD编辑</span></a></h3>',12)]))}const s=a(o,[["render",n],["__file","Bootice.html.vue"]]),h=JSON.parse('{"path":"/guide/Bootice.html","title":"Bootice:启动引导编辑工具","lang":"zn-CN","frontmatter":{},"headers":[{"level":2,"title":"下载地址","slug":"下载地址","link":"#下载地址","children":[]},{"level":2,"title":"配置教程","slug":"配置教程","link":"#配置教程","children":[{"level":3,"title":"物理磁盘","slug":"物理磁盘","link":"#物理磁盘","children":[]},{"level":3,"title":"BCD编辑","slug":"bcd编辑","link":"#bcd编辑","children":[]}]}],"git":{"updatedTime":1735227541000,"contributors":[{"name":"PZJ","email":"68857304+PZJPZJPZJ@users.noreply.github.com","commits":1,"url":"https://github.com/PZJ"}]},"filePathRelative":"guide/Bootice.md"}');export{s as comp,h as data};