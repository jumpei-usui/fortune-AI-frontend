import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import AtomsButton from "components/atoms/AtomsButton.vue";

test("test", () => {
  const wrapper = mount(AtomsButton);
  expect(wrapper.vm.test()).toBe(1);
});
