import React from 'react';
import { CUSTOM_CONTENT } from '../constants';

const CustomPage: React.FC = () => {
  return (
    <div className="space-y-10 animate-fadeIn max-w-4xl mx-auto">
      <div className="border-b border-stone-200 pb-6">
        <h1 className="font-serif text-4xl font-bold text-primary">Custom Space</h1>
        <p className="text-secondary mt-2 font-light text-lg">Personal projects, hobbies, or random thoughts.</p>
      </div>

      <div className="grid gap-8">
        {CUSTOM_CONTENT.map((block) => (
          <div key={block.id} className="bg-white rounded-xl p-8 shadow-sm border border-stone-100 transition-all hover:shadow-md group">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-serif font-bold text-primary relative inline-block">
                  {block.title}
                  <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-accent/20"></span>
                </h2>
              </div>
              <p className="text-stone-600 leading-relaxed whitespace-pre-wrap text-lg font-light">{block.content}</p>
              
              {/* 👇 新增部分开始：如果 block.link 存在，就显示链接按钮 */}
              {block.link && (
                <div className="mt-6">
                  <a 
                    href={block.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-stone-500 hover:text-primary transition-colors border border-stone-200 hover:border-primary px-4 py-2 rounded-full"
                  >
                    View Project 
                    {/* 一个小箭头图标 */}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              )}
              {/* 👆 新增部分结束 */}

            </div>
          </div>
        ))}
        
        {CUSTOM_CONTENT.length === 0 && (
          <div className="text-center py-16 bg-white border-2 border-dashed border-stone-200 rounded-xl">
            <p className="text-stone-400 text-lg">No content yet.</p>
            <p className="text-stone-300 text-sm mt-2">Update <code>CUSTOM_CONTENT</code> in <code>constants.ts</code> to add sections.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomPage;