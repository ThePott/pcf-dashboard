const CellInput = ({
    value,
    rowIndex,
    columnKey,
}: {
    value: string
    rowIndex: number
    columnKey: keyof BookWriteRowFlat
}) => {
    const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        const newValue = event.target.value
        updateRowArray(rowIndex, columnKey, newValue)
    }

    const cell = rowArray[rowIndex][columnKey]

    return (
        <div className="relative">
            <Input
                disabled={isPending}
                colorChangeIn="fill"
                variant="ghost"
                defaultValue={value}
                onBlur={handleBlur}
                isRed={cell.isError}
                onChange={(event) => validateChange({ event, columnKey })}
                data-coordinate={`${columnKey}-${rowIndex}`}
                onKeyDown={(event) => handleKeyDownNavigation({ event, columnKey, rowIndex })}
            />
            <p className="text-fg-muted pointer-events-none absolute top-1/2 left-6 -translate-y-1/2">
                {cell.overlaying}
            </p>
        </div>
    )
}

export default CellInput
