// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // 包分析工具插件
// const CompressionPlugin = require('compression-webpack-plugin'); // gzip压缩插件
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 图片压缩时file-loader和url-loader都要安装，不然build会失败
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)$/)  // 只匹配图片格式
      .use('url-loader')
      .loader('url-loader')
      .tap(options => ({
        // 设置 limit 为 5 * 1024，即大于 5KB 的图片不转为 base64
        limit: 5 * 1024,  // 5KB
        name: 'assets/[name].[hash:8].[ext]',  // 图片打包后保存路径
      }));
  },
  // transpileDependencies: true,
  configureWebpack: {
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //     cacheGroups: {
    //       vendor: {
    //         test: /[\\/]node_modules[\\/]/,
    //         name: 'vendors',
    //         chunks: 'all'
    //       }
    //     }
    //   }
    // },
    plugins: [
      // new BundleAnalyzerPlugin()
      // new CompressionPlugin({
      //   // 需要压缩的文件类型
      //   test: /\.(js|css|html)$/i,
      //   // 压缩文件的大小阈值，单位字节
      //   threshold: 5000, // 10KB
      //   // 使用 gzip 压缩
      //   algorithm: 'gzip',
      //   // 删除原始文件
      //   deleteOriginalAssets: true,
      // })
    ]
  },
})
