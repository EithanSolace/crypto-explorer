import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { ExternalLink } from 'lucide-react';
import 'highlight.js/styles/github.css';

const FileViewerApp = ({ file }) => {
    if (!file) return null;

    const resources = file.resources || [];
    const hasResources = resources.length > 0;

    // If there are resources, don't show any content (filename is already in window title)
    // Otherwise show the placeholder text
    const content = file.content || (
        hasResources
            ? ''
            : `# ${file.name} 暂无详细内容 (No Content Available)\n\n> [!TIP]\n> 这是一个开源项目，欢迎提交 PR 完善此条目！`
    );

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-white">
                {content && (
                    <div className="prose prose-slate max-w-none prose-headings:font-bold prose-h1:text-xl prose-h2:text-lg prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-100 prose-sm">
                        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                            {content}
                        </ReactMarkdown>
                    </div>
                )}

                {/* External Resources Section */}
                {hasResources && (
                    <div className={content ? "mt-8 border-t border-gray-200 pt-6" : ""}>
                        <div className="space-y-3">
                            {resources.map((resource, index) => (
                                <a
                                    key={index}
                                    href={resource.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-lg border border-blue-200 transition-all duration-200 hover:shadow-md group"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h4 className="text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                                {resource.title}
                                            </h4>
                                            {resource.description && (
                                                <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                                            )}
                                        </div>
                                        <ExternalLink
                                            size={16}
                                            className="text-blue-500 group-hover:text-blue-700 flex-shrink-0 ml-3 mt-1"
                                        />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-400 flex justify-between items-center flex-shrink-0 select-none">
                <span>ID: {file.id}</span>
                <div className="flex gap-3">
                    <span>Markdown 渲染</span>
                    <span>Read-Only</span>
                </div>
            </div>
        </div>
    );
};

export default FileViewerApp;
