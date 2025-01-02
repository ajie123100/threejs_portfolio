// 定义 Button 组件的 props 类型
interface ButtonProps {
    name: string; // 按钮文本
    isBeam?: boolean; // 是否显示光束效果，默认为 false
    containerClass?: string; // 自定义按钮样式类
    onClick?: () => void; // 点击事件处理函数
    disabled?: boolean; // 是否禁用按钮
    type?: 'button' | 'submit' | 'reset'; // 按钮类型
    // 其他 HTML 按钮属性
    [key: string]: any;
}

const Button = ({
    name,
    isBeam = false,
    containerClass = '',
    onClick,
    disabled = false,
    type = 'button',
    ...rest // 其他 HTML 按钮属性
}: ButtonProps) => {
    return (
        <button
            className={`btn ${containerClass}`} // 合并默认样式和自定义样式
            onClick={onClick}
            disabled={disabled}
            type={type}
            {...rest} // 传递其他 HTML 按钮属性
        >
            {isBeam && ( // 如果 isBeam 为 true，显示光束效果
                <span className="relative flex h-3 w-3">
                    <span className="btn-ping"></span>
                    <span className="btn-ping_dot"></span>
                </span>
            )}
            {name} {/* 按钮文本 */}
        </button>
    );
};

export default Button;