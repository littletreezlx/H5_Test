import React, { useState, useImperativeHandle, useCallback } from 'react';

const Foo = ({ actionRef }) => {
    const [value, setValue] = useState('');

    /**
     * 随机修改 value 值的函数
     */
    const randomValue = useCallback(() => {
        setValue(Math.round(Math.random() * 100) + '');
    }, []);

    /**
     * 提交函数
     */
    const submit = useCallback(() => {
        if (value) {
            alert(`提交成功，用户名为：${value}`);
        } else {
            alert('请输入用户名！');
        }
    }, [value]);

    useImperativeHandle(
        actionRef,
        () => {
            return {
                randomValue,
                submit,
            };
        },
        [randomValue, submit]
    );

    /* !! 返回多个属性要按照上面这种写法，不能像下面这样使用多个 useImperativeHandle
      useImperativeHandle(actionRef, () => {
          return {
              submit,
          }
      }, [submit])

      useImperativeHandle(actionRef, () => {
          return {
              randomValue
          }
      }, [randomValue])
  */

    return (
        <div className="box">
            <h2>函数组件</h2>
            <section>
                <label>用户名：</label>
                <input
                    value={value}
                    placeholder="请输入用户名"
                    onChange={e => setValue(e.target.value)}
                />
            </section>
            <br />
        </div>
    );
};

export default Foo;
