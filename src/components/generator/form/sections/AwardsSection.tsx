import { Fragment } from 'react'
import { useFieldArray } from 'react-hook-form'
import { FormSection } from './FormSection'
import { LabeledInput } from '../../../core/LabeledInput'
import { AddButton } from '../../../core/Button'
import { Divider } from '../../../core/Divider'

export function AwardSection() {
  const { fields, append } = useFieldArray({ name: 'awards' })

  return (
    <FormSection title="Honors & Awards">
      <LabeledInput
        name="headings.awards"
        label="Section Heading"
        placeholder="Awards"
      />
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          <Divider />
          <LabeledInput
            name={`awards.${index}.title`}
            label="Award Name"
            placeholder="Supreme hacker"
          />
          <LabeledInput
            name={`awards.${index}.date`}
            label="Award Date"
            placeholder="May 2015"
          />
          <LabeledInput
            name={`awards.${index}.awarder`}
            label="Awarder"
            placeholder="HackNY"
          />
          <LabeledInput
            name={`awards.${index}.summary`}
            label="Summary"
            placeholder="Recognized for creating the most awesome project at a hackathon."
          />
        </Fragment>
      ))}
      <AddButton type="button" onClick={() => append({})}>
        + Add Award
      </AddButton>
    </FormSection>
  )
}
