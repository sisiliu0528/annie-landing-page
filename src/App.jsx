import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white text-gray-800 px-6 py-12 font-sans">
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.header
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-pink-600">
            Annie · 产品经理 & UI/UX设计师
          </h1>
          <p className="mt-4 text-lg italic text-gray-600">
            用细节打磨体验，以温柔雕刻效率
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold border-l-4 border-pink-400 pl-3">
            关于我
          </h2>
          <p className="mt-3 text-base leading-relaxed">
            我是 Annie，从前端开发、UI设计一路走到产品管理。
            拥有丰富的B端项目全流程经验，服务于通信与AI行业超过十年。
            我擅长快速理解需求、协调团队、高效交付；
            坚持用美学驱动功能，以逻辑打磨体验，致力于做真正有温度的产品。
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold border-l-4 border-pink-400 pl-3">
            核心优势
          </h2>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside">
            <li>🎯 洞察力强，能迅速识别问题根源并提出解决方案</li>
            <li>🧠 项目推进稳准狠，交付率100%</li>
            <li>🎨 设计功底深厚，熟悉Figma、Axure、PS、AE等工具</li>
            <li>📊 同时具备前端技术背景，跨团队沟通无障碍</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold border-l-4 border-pink-400 pl-3">
            精选项目案例
          </h2>
          <div className="mt-6 space-y-8">
            <div className="bg-white shadow-lg rounded-xl p-6 border border-pink-100">
              <h3 className="text-xl font-bold text-pink-500">
                🌐 智能可视化平台（政务行业）
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                从0到1构建设计系统，参与6轮迭代，实现135%效率提升，连续三个季度获评优秀项目。
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 border border-pink-100">
              <h3 className="text-xl font-bold text-pink-500">
                📱 云端移动办公平台
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                服务4000+员工，主导多个行业定制版本设计，获用户一致好评与客户感谢信。
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 border border-pink-100">
              <h3 className="text-xl font-bold text-pink-500">
                🎮 智能警务系统（公安方向）
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                担任核心产品经理，推动需求落地与前端协同，主导评审、验收全流程，项目金额千万级。
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold border-l-4 border-pink-400 pl-3">
            更多标签
          </h2>
          <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700">
            <li>🎶 古筝演奏十级</li>
            <li>🎤 声音风格偏周深×王菲</li>
            <li>🏸 羽毛球爱好者</li>
            <li>🧩 教龄10年+，深受学生喜爱</li>
            <li>📚 组织能力强，曾任工会主席</li>
            <li>🎓 获多项校园奖项及演讲荣誉</li>
          </ul>
        </motion.section>

        <motion.footer
          className="text-center border-t pt-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <p className="text-base font-semibold text-gray-700">📮 联系我</p>
          <p>Email: your@email.com</p>
          <p>微信 / WhatsApp: your-contact</p>
          <p className="mt-2 text-sm text-gray-500">📍 所在地：Your City | 支持远程协作</p>
          <p className="mt-4 italic text-pink-500">
            “我相信，用心做产品，就能用产品打动人心。”
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
