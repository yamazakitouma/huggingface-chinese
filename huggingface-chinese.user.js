// ==UserScript==
// @name         Hugging Face 中文化插件
// @namespace    https://github.com/yamazakitouma/huggingface-chinese
// @description  中文化 Hugging Face 界面菜单及内容（性能优化版）
// @copyright    2026
// @icon         https://huggingface.co/front/assets/huggingface_logo-noborder.svg
// @version      1.2.0
// @author       蛋定的文弱书生
// @license      GPL-3.0
// @match        https://huggingface.co/*
// @match        https://*.huggingface.co/*
// @match        https://hf-mirror.com/*
// @run-at       document-start
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_notification
// @grant        GM_getValue
// @grant        GM_setValue
// @homepageURL  https://github.com/yamazakitouma/huggingface-chinese
// @supportURL   https://github.com/yamazakitouma/huggingface-chinese/issues
// @downloadURL  https://raw.githubusercontent.com/yamazakitouma/huggingface-chinese/main/huggingface-chinese.user.js
// @updateURL    https://raw.githubusercontent.com/yamazakitouma/huggingface-chinese/main/huggingface-chinese.user.js
// ==/UserScript==

(function () {
    'use strict';

    /* ============================================================
     * 1. 翻译词库
     * ============================================================ */

    const translations = {
        // 导航栏
        "Models": "模型",
        "Datasets": "数据集",
        "Spaces": "空间",
        "Docs": "文档",
        "Solutions": "解决方案",
        "Pricing": "价格",
        "Sign in": "登录",
        "Sign Up": "注册",
        "Search": "搜索",
        "Blog": "博客",
        "Enterprise": "企业版",
        "Login": "登录",
        "Profile": "个人资料",
        "Settings": "设置",
        "Logout": "退出登录",
        "Notifications": "通知",
        "Help": "帮助",

        // 侧边栏和筛选器
        "Filters": "筛选器",
        "All": "全部",
        "Text": "文本",
        "Image": "图像",
        "Audio": "音频",
        "Video": "视频",
        "Multimodal": "多模态",
        "Table": "表格",
        "Fill-Mask": "掩码填充",
        "Token Classification": "标记分类",
        "Text Generation": "文本生成",
        "Text2Text Generation": "文本到文本生成",
        "Summarization": "摘要生成",
        "Conversational": "对话",
        "Feature Extraction": "特征提取",
        "Translation": "翻译",
        "Multiple Choice": "多项选择",
        "Text Classification": "文本分类",
        "Question Answering": "问答",
        "Sentence Similarity": "句子相似度",
        "Zero-Shot Classification": "零样本分类",
        "Audio-Text-to-Text": "音频文本转文本",
        "Image-Text-to-Text": "图像文本转文本",
        "Visual Question Answering": "视觉问答",
        "Document Question Answering": "文档问答",
        "Video-Text-to-Text": "视频文本转文本",
        "Visual Document Retrieval": "视觉文档检索",
        "Any-to-Any": "任意到任意",
        "Computer Vision": "计算机视觉",
        "Depth Estimation": "深度估计",
        "Image Classification": "图像分类",
        "Object Detection": "目标检测",
        "Image Segmentation": "图像分割",
        "Text-to-Image": "文本到图像",
        "Image-to-Text": "图像到文本",
        "Image-to-Image": "图像到图像",
        "Image-to-Video": "图像到视频",
        "Unconditional Image Generation": "无条件图像生成",
        "Video Classification": "视频分类",
        "Text-to-Video": "文本到视频",
        "Zero-Shot Image Classification": "零样本图像分类",
        "Mask Generation": "掩码生成",
        "Zero-Shot Object Detection": "零样本目标检测",
        "Text-to-3D": "文本到3D",
        "Image-to-3D": "图像到3D",
        "Image Feature Extraction": "图像特征提取",
        "Keypoint Detection": "关键点检测",
        "Natural Language Processing": "自然语言处理",
        "Table Question Answering": "表格问答",
        "Text Ranking": "文本排序",
        "Text-to-Speech": "文本到语音",
        "Text-to-Audio": "文本到音频",
        "Automatic Speech Recognition": "自动语音识别",
        "Audio-to-Audio": "音频到音频",
        "Audio Classification": "音频分类",
        "Voice Activity Detection": "语音活动检测",
        "Tabular": "表格数据",
        "Tabular Classification": "表格分类",
        "Tabular Regression": "表格回归",
        "Time Series Forecasting": "时间序列预测",
        "Reinforcement Learning": "强化学习",
        "Robotics": "机器人学",
        "Other": "其他",
        "Graph Machine Learning": "图机器学习",

        // 按钮和操作
        "Load more": "加载更多",
        "Subscribe": "订阅",
        "Download": "下载",
        "Upload": "上传",
        "Create": "创建",
        "Sign Out": "退出登录",
        "Cancel": "取消",
        "Confirm": "确认",
        "Delete": "删除",
        "Edit": "编辑",
        "Save": "保存",
        "Close": "关闭",
        "Back": "返回",
        "Next": "下一步",
        "Previous": "上一步",
        "Continue": "继续",
        "Submit": "提交",
        "Copy": "复制",
        "Share": "分享",
        "Like": "点赞",
        "Unlike": "取消点赞",
        "Follow": "关注",
        "Unfollow": "取消关注",
        "View": "查看",
        "Hide": "隐藏",
        "Show more": "显示更多",
        "Show less": "显示较少",
        "Expand": "展开",
        "Collapse": "收起",

        // 模型相关
        "Model card": "模型卡片",
        "Files and versions": "文件与版本",
        "Community": "社区",
        "Training metrics": "训练指标",
        "Training logs": "训练日志",
        "Deploy": "部署",
        "Use in Transformers": "在Transformers中使用",
        "Hosted inference API": "托管推理API",
        "Contributors": "贡献者",
        "Licenses": "许可证",
        "Likes": "点赞数",
        "Downloads": "下载量",
        "Tasks": "任务类型",
        "Languages": "语言类型",
        "Main": "主要",
        "Libraries": "模型库",

        // 空间相关
        "Duplicate this Space": "复制此空间",
        "Embed this Space": "嵌入此空间",
        "App": "应用",
        "Files": "文件",
        "Sessions": "会话",
        "Hardware": "硬件",
        "Storage": "存储",
        "Variables": "变量",
        "Logs": "日志",

        // 文档相关
        "On this page": "本页内容",
        "Table of contents": "目录",
        "Getting Started": "入门指南",
        "Tutorials": "教程",
        "Conceptual Guides": "概念指南",
        "How-to Guides": "操作指南",
        "API Documentation": "API文档",

        // 新增内容
        "Collections": "收藏集",
        "Organizations": "组织",
        "Posts": "帖子",
        "Daily Papers": "每日论文",
        "Learn": "学习",
        "Discord": "Discord社区",
        "Forum": "论坛",
        "Github": "GitHub",
        "Enterprise Hub": "企业中心",
        "Expert Support": "专家支持",
        "Inference Endpoints": "推理端点",
        "Inbox": "收件箱",
        "New Model": "新建模型",
        "New Dataset": "新建数据集",
        "New Space": "新建空间",
        "New Collection": "新建收藏集",
        "Create organization": "创建组织",
        "Usage Quota": "使用配额",
        "Private Storage": "私有存储",
        "Public Storage": "公共存储",
        "Zero GPU": "零GPU",
        "Inference Usage": "推理使用量",
        "Subscribe to PRO": "订阅PRO版",
        "Access Tokens": "访问令牌",
        "Billing": "账单",
        "Changelog": "更新日志",
        "AI & ML interests": "AI与ML兴趣",
        "Recent Activity": "最近活动",
        "Account": "账户",
        "Authentication": "认证",
        "SSH and GPG Keys": "SSH和GPG密钥",
        "Inference Providers": "推理提供商",
        "Webhooks": "Webhooks",
        "Papers": "论文",
        "Local Apps and Hardware": "本地应用与硬件",
        "Gated Repositories": "受限仓库",
        "Content Preferences": "内容偏好",
        "Connected Apps": "已连接应用",
        "Theme": "主题",
        "Discussions": "讨论",
        "Pull requests": "拉取请求",
        "Welcome to the community": "欢迎来到社区专区",
        "The community tab is the place to discuss and collaborate with the HF community!":
            "此处是您与 HF 社区交流协作的专属空间！",
        "New discussion": "发起新讨论",
        "New pull request": "创建拉取请求",
        "Watch all activity": "查看所有活动动态",
        "View closed": "查看已关闭项",
        "Short": "排序",
        "Recently created": "最近创建",
        "Most reactions": "最多互动",
        "Trending": "热门内容",
        "Filter by title": "按标题筛选",
        "Filter by name": "按名称筛选",
        "Resources": "资源",
        "Search models, datasets, users...": "搜索模型、数据集、用户...",
        "No model card": "无模型卡片",
        "New: Create and edit this model card directly on the website!":
            "新功能：直接在线创建并编辑模型卡片！",
        "Contribute a Model Card": "贡献模型卡片",
        "Adapters": "适配器",
        "Finetunes": "微调模型",
        "Merges": "合并模型",
        "Quantizations": "量化模型",

        // 主页特定
        "Models, datasets and Spaces": "模型、数据集与空间",
        "Discover, explore and share ML resources": "发现、探索并分享机器学习资源",
        "Top contributors": "顶级贡献者",
        "Featured Spaces": "精选空间",
        "All Spaces": "所有空间",
        "Explore": "探索",
        "Browse models": "浏览模型",
        "Browse datasets": "浏览数据集",
        "Browse Spaces": "浏览空间",
        "Light theme": "浅色主题",
        "Light": "浅色",
        "Dark": "深色",
        "System": "系统",
        "System theme": "系统主题",

        // 列表页通用
        "Sort:": "排序:",
        "Most likes": "最多点赞",
        "Most downloads": "最多下载",
        "Recently updated": "最近更新",
        "Task": "任务",
        "Library": "库",
        "Dataset": "数据集",
        "Architecture": "架构",
        "Model name or keyword": "模型名称或关键词",
        "Search models": "搜索模型",
        "Parameters": "参数量",
        "Most parameters": "最多参数",
        "Least parameters": "最少参数",
        "Full-text search": "全文检索",
        "Language": "语言",
        "Dataset name or keyword": "数据集名称或关键词",
        "Search datasets": "搜索数据集",
        "SDK": "SDK",
        "Space name or keyword": "空间名称或关键词",
        "Search Spaces": "搜索空间",
        "Hugging Face Documentation": "Hugging Face 文档",
        "Search the docs": "搜索文档",
        "Edit this page": "编辑此页",
        "Feedback": "反馈",
        "Documentation": "文档",

        // 详情页
        "Model description": "模型描述",
        "Intended uses & limitations": "预期用途与限制",
        "How to use": "如何使用",
        "Limitations and bias": "限制与偏见",
        "Training data": "训练数据",
        "Training procedure": "训练过程",
        "Evaluation results": "评估结果",
        "Citation": "引用",
        "Model card authors": "模型卡片作者",
        "Model card contributors": "模型卡片贡献者",
        "Running on": "运行于",
        "Last updated": "最后更新",
        "Created by": "创建者",
        "App files": "应用文件",
        "README.md": "自述文件",

        // 其他通用词汇
        "Loading": "加载中",
        "Error": "错误",
        "Success": "成功",
        "Warning": "警告",
        "Info": "信息",
        "No results found": "未找到结果",
        "Try adjusting your search or filter to find what you're looking for.":
            "尝试调整搜索或筛选条件来找到您要找的内容。",
        "Something went wrong": "出现了一些问题",
        "Please try again later": "请稍后再试",
        "Learn more": "了解更多",
        "Read documentation": "阅读文档",
        "Get started": "开始使用",
        "Create new": "新建",
        "Overview": "概览",
        "API Keys": "API密钥",
        "Usage": "使用情况",
        "Members": "成员",
        "Support": "支持",
        "Privacy Policy": "隐私政策",
        "Terms of Service": "服务条款",
        "Cookie Policy": "Cookie政策",
        "About": "关于",
        "Contact": "联系",
        "Guides": "指南",
        "API Reference": "API参考",
        "Model Hub": "模型中心",
        "Dataset Hub": "数据集中心",
        "Space Hub": "应用中心",
        "Inference API": "推理API",
        "Widgets": "小部件",
        "Training": "训练",
        "Education": "教育版",
        "Research": "研究",
        "Partners": "合作伙伴",
        "Events": "活动",
        "Careers": "招聘",
        "Security": "安全",
        "Status": "状态",
        "Open source": "开源",
        "Activity": "活动",
        "Commits": "提交记录"
    };


    /* ============================================================
     * 2. 正则翻译
     *
     * 注意：
     * 不再使用 /about/i 这种过宽规则。
     * ============================================================ */

    const regexRules = [
        [/\b(\d+)\s+days?\s+ago\b/i, '$1天前'],
        [/\b(\d+)\s+hours?\s+ago\b/i, '$1小时前'],
        [/\b(\d+)\s+minutes?\s+ago\b/i, '$1分钟前'],
        [/\bJust now\b/i, '刚刚'],

        [/\b(\d[\d,.]*)\s+downloads?\b/i, '$1次下载'],
        [/\b(\d[\d,.]*)\s+likes?\b/i, '$1个点赞'],

        [/\bView closed\s*\(?(\d+)\)?/i, '查看已关闭项 $1'],

        [/^updated$/i, '更新'],
        [/^about$/i, '约'],

        [/^(\d+)\s+models?$/i, '$1个模型'],
        [/^(\d+)\s+datasets?$/i, '$1个数据集'],
        [/^(\d+)\s+spaces?$/i, '$1个空间']
    ];


    /* ============================================================
     * 3. 配置
     * ============================================================ */

    let enableRegExp = GM_getValue('enable_RegExp', true);

    // 单个文本节点最大处理长度。
    // README / Model Card 等正文不会被强行整段翻译。
    const MAX_TEXT_LENGTH = 500;

    // 每批最大处理新增根节点数
    const BATCH_SIZE = 40;

    // 延迟合并 DOM 更新，避免 HF 一次渲染大量节点时频繁处理
    const BATCH_DELAY = 60;


    /* ============================================================
     * 4. 缓存
     * ============================================================ */

    // 记录已经处理过的文本节点。
    // WeakMap 不会阻止 DOM 被垃圾回收。
    const textNodeCache = new WeakMap();

    // 记录元素属性值，避免相同属性不断重复处理。
    const attributeCache = new WeakMap();


    /* ============================================================
     * 5. 翻译核心
     * ============================================================ */

    function translate(text) {
        if (!text || typeof text !== 'string') {
            return false;
        }

        const trimmed = text.trim().replace(/\s+/g, ' ');

        if (!trimmed) {
            return false;
        }

        // 没有英文字母直接跳过
        if (!/[a-zA-Z]/.test(trimmed)) {
            return false;
        }

        // 精确词库优先
        const staticTranslation = translations[trimmed];

        if (staticTranslation) {
            return text.replace(trimmed, staticTranslation);
        }

        // 正则翻译
        if (enableRegExp) {
            for (const [pattern, replacement] of regexRules) {
                try {
                    // 避免全局正则 lastIndex 问题
                    pattern.lastIndex = 0;

                    if (pattern.test(trimmed)) {
                        pattern.lastIndex = 0;

                        const result = trimmed.replace(pattern, replacement);

                        if (result !== trimmed) {
                            return text.replace(trimmed, result);
                        }
                    }
                } catch (error) {
                    console.error('[HF 中文化] Regex error:', pattern, error);
                }
            }
        }

        return false;
    }


    /* ============================================================
     * 6. 判断是否应该跳过
     * ============================================================ */

    function shouldSkipElement(element) {
        if (!element || element.nodeType !== Node.ELEMENT_NODE) {
            return true;
        }

        const tagName = element.tagName;

        // 永远不要修改这些节点内部内容
        if (
            tagName === 'SCRIPT' ||
            tagName === 'STYLE' ||
            tagName === 'CODE' ||
            tagName === 'PRE' ||
            tagName === 'NOSCRIPT'
        ) {
            return true;
        }

        // 可编辑区域不要处理
        if (element.isContentEditable) {
            return true;
        }

        return false;
    }


    function shouldSkipTextNode(node) {
        if (!node || node.nodeType !== Node.TEXT_NODE) {
            return true;
        }

        const text = node.nodeValue;

        if (!text) {
            return true;
        }

        if (text.length > MAX_TEXT_LENGTH) {
            return true;
        }

        if (!/[a-zA-Z]/.test(text)) {
            return true;
        }

        const parent = node.parentElement;

        if (!parent) {
            return true;
        }

        return shouldSkipElement(parent);
    }


    /* ============================================================
     * 7. 文本节点翻译
     * ============================================================ */

    function translateTextNode(node) {
        if (shouldSkipTextNode(node)) {
            return;
        }

        const currentText = node.nodeValue;

        // 上次已经处理过相同内容
        if (textNodeCache.get(node) === currentText) {
            return;
        }

        const translated = translate(currentText);

        if (translated && translated !== currentText) {
            node.nodeValue = translated;

            // 缓存翻译后的值
            textNodeCache.set(node, translated);
        } else {
            // 即使没有翻译，也缓存。
            // 防止同一个节点不断重新检查。
            textNodeCache.set(node, currentText);
        }
    }


    /* ============================================================
     * 8. 属性翻译
     * ============================================================ */

    function translateAttribute(element, attribute) {
        const value = element.getAttribute(attribute);

        if (!value) {
            return;
        }

        let cache = attributeCache.get(element);

        if (!cache) {
            cache = {};
            attributeCache.set(element, cache);
        }

        if (cache[attribute] === value) {
            return;
        }

        const translated = translate(value);

        if (translated && translated !== value) {
            element.setAttribute(attribute, translated);
            cache[attribute] = translated;
        } else {
            cache[attribute] = value;
        }
    }


    function processElementAttributes(element) {
        if (!element || shouldSkipElement(element)) {
            return;
        }

        const tagName = element.tagName;

        switch (tagName) {
            case 'INPUT':
            case 'TEXTAREA':
                if (
                    element.type === 'button' ||
                    element.type === 'submit' ||
                    element.type === 'reset'
                ) {
                    translateAttribute(element, 'value');
                } else {
                    translateAttribute(element, 'placeholder');
                }

                translateAttribute(element, 'aria-label');
                translateAttribute(element, 'title');
                break;

            case 'BUTTON':
                translateAttribute(element, 'aria-label');
                translateAttribute(element, 'title');
                translateAttribute(element, 'data-confirm');
                break;

            case 'OPTGROUP':
                translateAttribute(element, 'label');
                break;

            case 'A':
                translateAttribute(element, 'title');
                translateAttribute(element, 'aria-label');
                break;

            default:
                translateAttribute(element, 'aria-label');
                translateAttribute(element, 'title');
                break;
        }
    }


    /* ============================================================
     * 9. TreeWalker 遍历
     *
     * 只扫描：
     * - Element
     * - Text
     *
     * 不再手写递归 childNodes。
     * ============================================================ */

    function traverse(root) {
        if (!root) {
            return;
        }

        // 单独文本节点
        if (root.nodeType === Node.TEXT_NODE) {
            translateTextNode(root);
            return;
        }

        if (root.nodeType !== Node.ELEMENT_NODE) {
            return;
        }

        if (shouldSkipElement(root)) {
            return;
        }

        processElementAttributes(root);

        const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        if (shouldSkipElement(node)) {
                            return NodeFilter.FILTER_REJECT;
                        }

                        return NodeFilter.FILTER_ACCEPT;
                    }

                    if (node.nodeType === Node.TEXT_NODE) {
                        return NodeFilter.FILTER_ACCEPT;
                    }

                    return NodeFilter.FILTER_SKIP;
                }
            }
        );

        let node;

        while ((node = walker.nextNode())) {
            if (node.nodeType === Node.ELEMENT_NODE) {
                processElementAttributes(node);
            } else if (node.nodeType === Node.TEXT_NODE) {
                translateTextNode(node);
            }
        }
    }


    /* ============================================================
     * 10. 批处理队列
     *
     * HF 页面经常一次加入几十/几百个节点。
     * 不立即递归处理，而是合并后批量处理。
     * ============================================================ */

    const pendingNodes = new Set();

    let batchTimer = null;
    let batchRunning = false;


    function enqueueNode(node) {
        if (!node) {
            return;
        }

        pendingNodes.add(node);

        scheduleBatch();
    }


    function scheduleBatch() {
        if (batchTimer || batchRunning) {
            return;
        }

        batchTimer = setTimeout(() => {
            batchTimer = null;
            processBatch();
        }, BATCH_DELAY);
    }


    function processBatch() {
        if (batchRunning) {
            return;
        }

        batchRunning = true;

        const nodes = Array.from(pendingNodes).slice(0, BATCH_SIZE);

        for (const node of nodes) {
            pendingNodes.delete(node);

            // 节点已经离开 DOM 就不处理
            if (
                node.nodeType === Node.ELEMENT_NODE &&
                !node.isConnected
            ) {
                continue;
            }

            traverse(node);
        }

        batchRunning = false;

        if (pendingNodes.size > 0) {
            // 交给下一帧继续处理，避免阻塞主线程
            requestAnimationFrame(processBatch);
        }
    }


    /* ============================================================
     * 11. DOM Observer
     *
     * 这里只监听 childList。
     *
     * 不监听：
     * characterData
     * attributes
     *
     * 这是本次优化最关键的一点。
     * ============================================================ */

    function watchDOM() {
        if (!document.body) {
            return;
        }

        const observer = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                if (mutation.type !== 'childList') {
                    continue;
                }

                for (const node of mutation.addedNodes) {
                    // 文本节点
                    if (node.nodeType === Node.TEXT_NODE) {
                        enqueueNode(node);
                        continue;
                    }

                    // Element
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        enqueueNode(node);
                    }
                }
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }


    /* ============================================================
     * 12. 初次全文翻译
     * ============================================================ */

    function translateDocument() {
        if (!document.body) {
            return;
        }

        traverse(document.body);
    }


    /* ============================================================
     * 13. SPA 页面导航处理
     *
     * Hugging Face 页面内部跳转通常不会真正刷新。
     * URL 改变后做一次补充扫描。
     * ============================================================ */

    let lastUrl = location.href;

    function watchNavigation() {
        const checkUrl = () => {
            if (location.href === lastUrl) {
                return;
            }

            lastUrl = location.href;

            // 给 HF 一点时间完成页面更新
            setTimeout(() => {
                if (document.body) {
                    enqueueNode(document.body);
                }
            }, 200);
        };

        window.addEventListener('popstate', checkUrl);

        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;

        history.pushState = function (...args) {
            const result = originalPushState.apply(this, args);

            setTimeout(checkUrl, 0);

            return result;
        };

        history.replaceState = function (...args) {
            const result = originalReplaceState.apply(this, args);

            setTimeout(checkUrl, 0);

            return result;
        };
    }


    /* ============================================================
     * 14. 菜单
     * ============================================================ */

    function setupMenu() {
        GM_registerMenuCommand(
            `${enableRegExp ? '关闭' : '开启'}正则翻译`,
            () => {
                enableRegExp = !enableRegExp;

                GM_setValue('enable_RegExp', enableRegExp);

                GM_notification({
                    text: `已${enableRegExp ? '开启' : '关闭'}正则翻译`,
                    title: 'Hugging Face 中文化插件',
                    timeout: 2000
                });

                location.reload();
            }
        );
    }


    /* ============================================================
     * 15. 初始化
     * ============================================================ */

    let initialized = false;

    function init() {
        if (initialized) {
            return;
        }

        if (!document.body) {
            return;
        }

        initialized = true;

        // 初次扫描
        translateDocument();

        // 动态 DOM
        watchDOM();

        // SPA 跳转
        watchNavigation();

        // 菜单
        setupMenu();
    }


    if (document.readyState === 'loading') {
        document.addEventListener(
            'DOMContentLoaded',
            init,
            { once: true }
        );
    } else {
        init();
    }

})();
