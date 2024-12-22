# HomeAssistant:智能家居物联网本地平台
## 网站
- [官网](https://www.home-assistant.io/)
## Docker部署
```yaml
services:
 homeassistant:
   image: homeassistant/home-assistant:stable
   container_name: homeassistant
   privileged: true
   environment:
     TZ: Asia/Shanghai
   restart: always
   volumes:
    - ./config:/config
   ports:
      - "8123:8123"
```
## 集成
### [Xiaomi Home](https://github.com/XiaoMi/ha_xiaomi_home)
