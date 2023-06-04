export const InputField = ({ type, value, setValue, placeholder, style }) => {
      const onChange = (e) => {
            setValue(e.target.value)
      }
      return (
            <input
                  type={type}
                  onChange={onChange}
                  value={value}
                  placeholder={placeholder}
                  className="border border-black rounded-sm mb-8	"
                  style={{ height: 30, width: 300 }}
            />
      )
}
