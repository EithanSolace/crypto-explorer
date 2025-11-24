# Crypto Explorer (密码学补完计划)

这是一个密码学学习网页。你将看到：

1. **层次化组织好的密码学概念**

    受启发于操作系统文件资源管理器的设计，以此UI风格清晰地组织众多的密码学概念。

2. **相关概念的优质学习资源链接**

    打开一个概念对应的文件，可以看到集成好的优质的学习资源链接。

## 如何使用

访问 [https://eithansolace.github.io/crypto-explorer](https://eithansolace.github.io/crypto-explorer) 即可。

## 技术栈

- **核心框架**: [React](https://react.dev/)
- **构建工具**: [Vite](https://vitejs.dev/)
- **样式库**: [Tailwind CSS](https://tailwindcss.com/)
- **图标库**: [Lucide React](https://lucide.dev/)

## 如何成为贡献者

### 贡献种类

#### **内容方面**

1. 增加/改动/删除密码学概念  
    举例：
    - 您发现RSA这个概念缺失，希望添加这个概念名称
    - 您发现DDDESSS这个概念命名不合适或错误，希望改动或删除这个概念名称
2. 为某个特定的密码学概念增加具体内容  
    举例：
    - 您为RSA概念制作了讲解的网页，希望将您的网页链接添加到RSA概念的文件中
    - 您在网上学习的过程中看到了讲解DES讲得很好的网页，希望将网页链接添加到DES概念的文件中

#### **优化方面(代码相关)**

1. 发现/解决bug  
2. 更符合直觉的交互设计

### 具体做法

1. **fork项目，clone到本地**

    ```bash
    git clone https://github.com/your-username/crypto-explorer.git
    cd crypto-explorer
    ```

2. **新建分支，创作/修改内容**

    ```bash
    git switch -c 新分支名如RSA
    ```

    随后，您如果专注于内容方面不做优化方面，打开crypto-explorer/src/data/fileSystem.js这个文件修改相关部分就可以了，别的文件不用修改。

3. **安装环境，本地测试(如果您专注于内容方面不做优化方面可以跳过这一步)**

    ```bash
    npm install
    npm run dev
    ```

    随后，打开浏览器进行测试。

4. **保存创作内容，同步到远程**

    ```bash
    git add .
    git commit -m "概括您做出的贡献"
    git push origin 新分支名如RSA
    ```

5. **提交Pull Request**

    提交您的PR。
